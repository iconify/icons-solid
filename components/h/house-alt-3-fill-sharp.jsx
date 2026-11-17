import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uln7di7qn {
  fill: currentColor;
  d: path("m19.664 8.475l2 1.778a1 1 0 0 1 .334.688a1 1 0 0 1-.251.723l-.013.015a1 1 0 0 1-1.412.083L20 11.476V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9.524l-.322.286a1 1 0 0 1-1.412-.083l-.013-.015a1 1 0 0 1 .083-1.411l1.999-1.778h.001l7-6.222a1 1 0 0 1 1.328 0Z");
}
</style><path class="uln7di7qn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-alt-3-fill-sharp"} {...others} />);
}

export default Component;
