import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a93gxyrid {
  cx: 15.5px;
  cy: 12px;
  r: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hwd8ickpq {
  d: path("M2.75 5h18.5M2.75 8.5h9m7.5 0h2M2.75 12h7.75m-7.75 3.5h9m7.5 0h2M2.75 19h18.5M2.75 5v14");
}
</style><g class="hntgybcog"><path class="hwd8ickpq"/><circle class="a93gxyrid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:staff-lines"} {...others} />);
}

export default Component;
