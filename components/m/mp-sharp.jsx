import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yhbc-1bjq {
  fill: currentColor;
  d: path("M6 15h1.5v-4.5h1v3H10v-3h1V15h1.5V9H6zm7.5 0H15v-1.5h3V9h-4.5zm1.5-3v-1.5h1.5V12zM3 21V3h18v18z");
}
</style><path class="yhbc-1bjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mp-sharp"} {...others} />);
}

export default Component;
