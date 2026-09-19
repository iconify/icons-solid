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

.lna-g7wmc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m18.219 29.781l-9.421 9.421m20.98-9.424L39.2 39.2m-7.547-18.08l1.237-4.704a1.07 1.07 0 0 0-1.305-1.305l-4.703 1.235");
}

.pt9ns81ic {
  cx: 24px;
  cy: 24px;
  r: 8.176px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><circle class="pt9ns81ic"/><path class="lna-g7wmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:lineage-audiofx"} {...others} />);
}

export default Component;
