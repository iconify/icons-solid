import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lb5oxcbwo {
  fill: currentColor;
  d: path("M8.5 11.5H10v-6H7V7h1.5zm3.5 0h4.5v-6H12V9h3v1h-3zM13.5 8V6.5H15V8zM6 18.5h1.5V14h1v3H10v-3h1v4.5h1.5v-6H6zm7.5 0H15V17h3v-4.5h-4.5zm1.5-3V14h1.5v1.5zM3 21V3h18v18z");
}
</style><path class="lb5oxcbwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:19mp-sharp"} {...others} />);
}

export default Component;
