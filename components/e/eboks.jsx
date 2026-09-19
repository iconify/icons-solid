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

.omdrmcb7l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.928 30.464a7.924 7.924 0 0 1-14.84-3.812l-.037-5.15a7.928 7.928 0 0 1 15.855-.115l.018 2.575l-15.855.115M43.027 34h-8");
}
</style><circle class="cpk0fnbgt"/><path class="omdrmcb7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:eboks"} {...others} />);
}

export default Component;
