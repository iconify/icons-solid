import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iwkkrqbym {
  d: path("m12.65 6.38l3.9 2.25q.65.37.65 1.12v4.5q0 .75-.65 1.13l-3.9 2.25q-.65.37-1.3 0l-3.9-2.25Q6.8 15 6.8 14.25v-4.5q0-.75.65-1.12l3.9-2.25q.65-.38 1.3 0M12 12V6.75M12 12l4.55 2.63M12 12l-4.55 2.63");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="iwkkrqbym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:crypto-coin"} {...others} />);
}

export default Component;
