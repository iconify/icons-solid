import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p66rk-b3z {
  d: path("M9.25 15.25V11h6.5M13.5 8.75L15.75 11l-2.25 2.25");
}

.ud1xjfb4a {
  d: path("m13.59 4.34l6.07 6.07L21.25 12l-1.59 1.59l-6.07 6.07L12 21.25l-1.59-1.59l-6.07-6.07L2.75 12l1.59-1.59l6.07-6.07L12 2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ud1xjfb4a"/><path class="p66rk-b3z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:directions-sharp"} {...others} />);
}

export default Component;
