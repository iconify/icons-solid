import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ik0twvfwg {
  d: path("M2.75 2.75h7.75v7.75H2.75zm10.75 0h7.75v7.75H13.5zM2.75 13.5h7.75v7.75H2.75zm10.75 0h7.75v7.75H13.5z");
}

.ni6nfmb8z {
  d: path("m15.5 6.75l1.5 1.5l2.5-2.75m-14.75 12l1.5 1.5l2.5-2.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ik0twvfwg"/><path class="ni6nfmb8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:captcha-sharp"} {...others} />);
}

export default Component;
