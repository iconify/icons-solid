import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kphxrsb2a {
  d: path("M2.75 20.25V11.2l.77-.63l4.21-3.44l.77-.63l.77.63l4.21 3.44l.77.63v10.05H2.75z");
}

.mc2ru_bxr {
  d: path("M6.5 21.25v-5h4v5m-4-5l4 5m0-5l-4 5m10.25 0V7a2.25 2.25 0 0 1 4.5 0v14.25Zm0-10.25h4.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="kphxrsb2a"/><path class="mc2ru_bxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:farmhouse-sharp"} {...others} />);
}

export default Component;
