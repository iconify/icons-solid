import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m0k5q8nkc {
  fill: currentColor;
  d: path("M6.616 16.808h8v-2h-8zM4 20V4h16v16z");
}
</style><path class="m0k5q8nkc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:position-bottom-left-sharp"} {...others} />);
}

export default Component;
