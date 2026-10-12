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

.nhcbi2z5x {
  d: path("M4.5 2.75h7.25v9.75l5.15 1.9a4.6 4.6 0 0 1 2.85 3.85H4.5Zm3.75 3.5h3.5m-3.5 3h3.5");
}

.of7t0s90p {
  width: 15.25px;
  height: 3px;
  x: 4.5px;
  y: 18.25px;
  rx: 1px;
}
</style><g class="hntgybcog"><path class="nhcbi2z5x"/><rect class="of7t0s90p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:boot"} {...others} />);
}

export default Component;
