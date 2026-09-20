import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nn6jjh0sm {
  d: path("M9 10h6v7H9Z");
}

.w0sebyb3m {
  d: path("M9 13.5h6");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="nn6jjh0sm"/><path class="w0sebyb3m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:document-archive-outline-thin"} {...others} />);
}

export default Component;
