import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iq9in6bpg {
  d: path("m7 16 -3 3h6");
}

.rxedw8b6o {
  d: path("m7 16 9 -9 3 3 -9 9Z");
}

.wsj78vmsl {
  d: path("m14 9 3 3");
}
</style><g class="hntgybcog"><path class="rxedw8b6o"/><path class="iq9in6bpg"/><path class="wsj78vmsl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:school-pencil-outline-thin"} {...others} />);
}

export default Component;
