import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ae0h5kb0o {
  d: path("M9 15h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kmgwxaclg {
  width: 4px;
  height: 2.5px;
  x: 10px;
  y: 2.75px;
  rx: 1px;
}

.mfnjzkrjs {
  d: path("M10.75 7.5h2.5v3.91a5 5 0 1 1-2.5 0Z");
}
</style><g class="hntgybcog"><path class="mfnjzkrjs"/><rect class="kmgwxaclg"/><path class="ae0h5kb0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:erlenmeyer"} {...others} />);
}

export default Component;
