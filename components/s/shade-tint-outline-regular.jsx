import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.entdgs0no {
  d: path("M3 5h18v6H3Z");
}

.f8gsx7b5s {
  d: path("M6 8h12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q30lbsbyl {
  d: path("M3 14h18v6H3Z");
}

.vn9zmkbyj {
  d: path("M12 17h6");
}
</style><g class="nrj6p8qat"><path class="entdgs0no"/><path class="q30lbsbyl"/><path class="f8gsx7b5s"/><path class="vn9zmkbyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:shade-tint-outline-regular"} {...others} />);
}

export default Component;
