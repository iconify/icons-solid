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

.dgb0hsu8a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.715 13.416L27.047 29.411l-4.729-4.618v12.989h13.26l-4.465-4.374l13.858-14.147");
}

.mvcls1moz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m3.307 29.834l14.398-14.7l-4.668-4.572h12.95v12.684l-4.41-4.318L5.645 35.194");
}
</style><circle class="cpk0fnbgt"/><path class="mvcls1moz"/><path class="dgb0hsu8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:bsnl-broadband-data-usage-pro"} {...others} />);
}

export default Component;
