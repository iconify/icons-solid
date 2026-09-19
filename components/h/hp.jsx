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

.o79spxb8p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.985 21.725c1.248-3.866 4.947-7 8.26-7h0c3.314 0 4.988 3.134 3.74 7l-3.73 11.55m6.26-7c-1.248 3.866.426 7 3.74 7h0c3.313 0 7.012-3.134 8.26-7l1.47-4.55c1.248-3.866-.427-7-3.74-7h0c-3.314 0-7.012 3.134-8.26 7m-19.73 11.55l9.652-29.89m12.338 11.34l-9.83 30.441");
}
</style><circle class="cpk0fnbgt"/><path class="o79spxb8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:hp"} {...others} />);
}

export default Component;
