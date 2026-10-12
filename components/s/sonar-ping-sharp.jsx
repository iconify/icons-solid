import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.siwf3tbbo {
  d: path("M8.5 8.25a5.25 5.25 0 0 1 0 7.5m3-10.5a9.5 9.5 0 0 1 0 13.5");
}

.svuooibzi {
  cx: 4.75px;
  cy: 12px;
  r: 2px;
}

.taq4_hb2a {
  cx: 18.75px;
  cy: 12px;
  r: 2px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="svuooibzi"/><path class="siwf3tbbo"/><circle class="taq4_hb2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sonar-ping-sharp"} {...others} />);
}

export default Component;
