import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.du7covavu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m3.425 17.761l27.744-6.227c8.35-1.455 11.661 9.112-12.107 16.463m4.586-9.155l-10.55 21.063");
}

.hy6gdjmja {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.681 24.181c7.87-.382 6.744 5.914 4.685 7.608c-4.31 3.547-11.94 2.294-16.478.547");
}
</style><circle class="cpk0fnbgt"/><path class="du7covavu"/><path class="hy6gdjmja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:biccamera"} {...others} />);
}

export default Component;
