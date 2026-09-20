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

.t407ddc6o {
  d: path("M3 12h8");
}

.tvcifwtpi {
  d: path("M8.5 9.5 11 12l-2.5 2.5");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="t407ddc6o"/><path class="tvcifwtpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:document-input-outline-thin"} {...others} />);
}

export default Component;
