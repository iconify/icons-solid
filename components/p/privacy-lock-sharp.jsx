import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cvk--017m {
  cx: 12px;
  cy: 14.25px;
  r: 1.5px;
}

.d7e32ebyd {
  d: path("M9.5 18.5a2.5 2.5 0 0 1 5 0");
}

.ov_oyfwpb {
  d: path("M8 10.25V7.5a4 4 0 0 1 8 0v2.75m-11.75 0h15.5v11H4.25z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ov_oyfwpb"/><circle class="cvk--017m"/><path class="d7e32ebyd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:privacy-lock-sharp"} {...others} />);
}

export default Component;
