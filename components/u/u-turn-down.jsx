import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.obdhrqbem {
  d: path("M4.5 5.5h10a5 5 0 0 1 0 10h-6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zvrid2nje {
  d: path("m11.5 18.5l-3-3l3-3");
}
</style><g class="ulnmmdpxh"><path class="obdhrqbem"/><path class="zvrid2nje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:u-turn-down"} {...others} />);
}

export default Component;
