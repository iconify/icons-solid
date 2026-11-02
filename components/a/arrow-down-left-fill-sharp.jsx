import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e7-8rccxv {
  fill: currentColor;
  d: path("M6 17v-7a1 1 0 0 1 2 0v4.586l8.293-8.293a.999.999 0 1 1 1.414 1.414L9.414 16H14a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1");
}
</style><path class="e7-8rccxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-down-left-fill-sharp"} {...others} />);
}

export default Component;
