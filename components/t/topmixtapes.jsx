import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.t2qp5xb4x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.51 12.225v25.664m7.949-18.555v11.473M24.137 5.5v37M13.9 5.5h20.475m-18.556 9.113v20.805M7.541 19.361v11.282");
}
</style><path class="t2qp5xb4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:topmixtapes"} {...others} />);
}

export default Component;
