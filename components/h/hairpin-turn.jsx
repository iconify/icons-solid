import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hhm3ies2w {
  d: path("M2.5 21.5v-13a6.5 6.5 0 0 1 13 0V13c0 2.5 1.5 3.5 6 3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yrpah0byk {
  d: path("M6 21.5v-13a3 3 0 0 1 6 0V14c0 4.5 3 6 9.5 6");
}
</style><g class="ulnmmdpxh"><path class="hhm3ies2w"/><path class="yrpah0byk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hairpin-turn"} {...others} />);
}

export default Component;
