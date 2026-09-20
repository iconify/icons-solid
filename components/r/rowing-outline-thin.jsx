import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dui-9ojgu {
  d: path("M7 12 3 8");
}

.eapwvqbey {
  d: path("M3 13h18c-1 4 -4 7 -9 7s-8 -3 -9 -7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q5jw2tb7h {
  d: path("m17 12 4 -4");
}
</style><g class="hntgybcog"><path class="eapwvqbey"/><path class="dui-9ojgu"/><path class="q5jw2tb7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:rowing-outline-thin"} {...others} />);
}

export default Component;
