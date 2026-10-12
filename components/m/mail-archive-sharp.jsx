import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qk42pu2fz {
  d: path("M9.75 13H15v4.5H9V13zm-.5.5L12 15.25l2.75-1.75");
}

.twm-7ebcm {
  d: path("M2.75 3.75h18.5v4.5H2.75zm1.5 6.75h15.5v9.75H4.25v-2.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="twm-7ebcm"/><path class="qk42pu2fz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:mail-archive-sharp"} {...others} />);
}

export default Component;
