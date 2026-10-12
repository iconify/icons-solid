import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.diquzrbgv {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 6.25h6v3H9zm-2.5 6h11v3h-11zm-2.5 6h16v3H4z");
}

.ej4_3wbll {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="diquzrbgv"/><path class="ej4_3wbll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:wedding-cake-sharp"} {...others} />);
}

export default Component;
