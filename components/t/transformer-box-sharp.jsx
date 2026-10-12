import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l0wvt9azh {
  d: path("M9.25 9.5a1.5 1.5 0 0 1 0 3a1.5 1.5 0 0 1 0 3a1.5 1.5 0 0 1 0 3m5.5-9a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0 3");
}

.t0jolzb9b {
  d: path("M3.25 6h17.5v15.25H3.25zM8 6V2.75M16 6V2.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="t0jolzb9b"/><path class="l0wvt9azh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:transformer-box-sharp"} {...others} />);
}

export default Component;
