import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gfnf-hswa {
  d: path("M15.5 21.5h-11v-13h12v6.4m-9-6.4L9 5h3l1.5 3.5m-3-3.5V2.5");
}

.p-qw9xbvf {
  d: path("M18.5 15.25c.25 2.25 1 3 3.25 3.25c-2.25.25-3 1-3.25 3.25c-.25-2.25-1-3-3.25-3.25c2.25-.25 3-1 3.25-3.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gfnf-hswa"/><path class="p-qw9xbvf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hair-bleach"} {...others} />);
}

export default Component;
