import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pprsu-mfw {
  cx: 11px;
  cy: 13px;
  r: 4.25px;
}

.tibu_bctd {
  cx: 11px;
  cy: 13px;
  r: 8.25px;
}

.x1vhi6lsn {
  d: path("m12.13 12.02l-.35-.75H9.84v.86c0 1.22 2.34.61 2.34 1.78v.83h-2.018l-.292-.73M14 10l4.75-4.75m0-2.5v2.5h2.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="tibu_bctd"/><circle class="pprsu-mfw"/><path class="x1vhi6lsn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:financial-plan-sharp"} {...others} />);
}

export default Component;
