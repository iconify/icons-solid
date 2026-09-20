import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a-wplf-uj {
  d: path("M16 21V9H7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wd2ghz3oy {
  d: path("M10 6 7 9l3 3");
}
</style><g class="nrj6p8qat"><path class="a-wplf-uj"/><path class="wd2ghz3oy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:turn-left-outline-regular"} {...others} />);
}

export default Component;
