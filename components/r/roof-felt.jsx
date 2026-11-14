import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ehcngrjeu {
  d: path("M4 5v14a5 2.5 0 0 0 10 0V5m0 1.5c4.5 0 6.5 2.5 6.5 6.5v8.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.plq4xqbqf {
  d: path("M4 5a5 2.5 0 1 0 10 0A5 2.5 0 1 0 4 5");
}
</style><g class="hntgybcog"><path class="plq4xqbqf"/><path class="ehcngrjeu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:roof-felt"} {...others} />);
}

export default Component;
