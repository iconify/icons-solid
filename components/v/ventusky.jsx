import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.eevjuhb-s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.286 33.278h17.85m-23.636 0h3.883M4.5 18.433h19.745m8.69 0h7.774M16.472 29.566h14.956m-20.842 0h3.882m11.78-3.71h7.774m-17.55 0h7.773m-13.66-3.712h3.883m14.774 0h7.773m-20.543 0h7.773m11.481-7.422H43.5m-27.028 0h7.773");
}
</style><path class="eevjuhb-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ventusky"} {...others} />);
}

export default Component;
