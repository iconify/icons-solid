import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jid99gkka {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m2.753 27.126l10.079 4.921L8.9 39.284");
}

.u0v559fvc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m45.247 20.874l-10.079-4.921L39.1 8.716M2.753 27.126a21.472 21.472 0 0 0 42.494 0");
}

.vv9c0wbul {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M45.247 20.874a21.472 21.472 0 0 0-42.494 0");
}
</style><path class="vv9c0wbul"/><path class="u0v559fvc"/><path class="jid99gkka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:syncme"} {...others} />);
}

export default Component;
