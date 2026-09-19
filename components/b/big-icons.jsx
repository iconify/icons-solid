import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.aullvbbbe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.165 16.688v4.875H8.84v-4.875m12.99 0v4.875h-4.326v-4.875m21.657 0v4.875h-4.326v-4.875m-4.339 0v4.875h-4.327v-4.875");
}

.grsbnzbwy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 16.688h39v14.625h-39z");
}
</style><path class="grsbnzbwy"/><path class="aullvbbbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:big-icons"} {...others} />);
}

export default Component;
