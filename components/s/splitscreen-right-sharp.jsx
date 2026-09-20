import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zipj-761y {
  fill: currentColor;
  d: path("M13 21V3h8v18zM3 21V3h8v18zM5 5v14h4V5z");
}
</style><path class="zipj-761y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:splitscreen-right-sharp"} {...others} />);
}

export default Component;
