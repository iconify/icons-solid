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

.iaozfqbuj {
  d: path("M14.5 4H17a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V8l4 -4h2.5");
}

.jz1duccjs {
  d: path("M8 12h8v4H8Z");
}

.qroz4tgom {
  d: path("M9.5 12a2.5 2.5 0 0 1 5 0");
}
</style><g class="hntgybcog"><path class="iaozfqbuj"/><path class="jz1duccjs"/><path class="qroz4tgom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:model-lock-outline-thin"} {...others} />);
}

export default Component;
