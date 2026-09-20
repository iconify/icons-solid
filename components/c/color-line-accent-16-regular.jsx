import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.tzy3kacep {
  fill: currentColor;
  d: path("M2.007 11.414a1.75 1.75 0 0 0 1.958.773l2.397-.655h.001A3.2 3.2 0 0 0 7.44 11h6.06a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-2q0-.044.007-.086");
}
</style><path class="tzy3kacep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:color-line-accent-16-regular"} {...others} />);
}

export default Component;
