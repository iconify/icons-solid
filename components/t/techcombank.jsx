import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.q604akbcv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 24.02L30.515 11.355l-6.516 6.334l6.516 6.333l-6.516 6.332l6.516 6.293zM24 17.689l-6.472 6.333L24 30.353l-6.47 6.292L4.5 24.021l13.028-12.667z");
}
</style><path class="q604akbcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:techcombank"} {...others} />);
}

export default Component;
