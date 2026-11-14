import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l6u_nifpu {
  d: path("M2.5 5H11v14H2.5Zm19 0v9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xwhxajbvv {
  d: path("M5.25 7.75h3v3.5h-3ZM11 9.5h3.25m2.75 0h4.5");
}
</style><g class="ulnmmdpxh"><path class="l6u_nifpu"/><path class="xwhxajbvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:measure-distance-laser"} {...others} />);
}

export default Component;
