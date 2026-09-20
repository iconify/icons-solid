import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pq65d4pux {
  d: path("M20 20V10H4");
}

.wuavqcbqp {
  d: path("m9 5 -5 5 5 5");
}
</style><g class="nrj6p8qat"><path class="pq65d4pux"/><path class="wuavqcbqp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:corner-up-left-outline-regular"} {...others} />);
}

export default Component;
