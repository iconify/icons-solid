import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fwan7absj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 11.98v27.26h-39V15.17l1.52-.49l6.34-2.05l2-.65zM17.723 8.718h12.553v3.261H17.723z");
}

.ncv0pj11b {
  cx: 24px;
  cy: 25.702px;
  r: 8.638px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vpmokh2bg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.36 9.76v2.87l-6.34 2.05V9.76z");
}
</style><path class="fwan7absj"/><circle class="ncv0pj11b"/><path class="vpmokh2bg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:timelapsecam"} {...others} />);
}

export default Component;
