import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qwujceb6i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 12a2.75 2.75 0 0 1-.6-5.43a5.5 5.5 0 0 1 9.5-.02a2.75 2.75 0 0 1 .1 5.45Zm4.5 7.25v-4.5M9.75 17L12 14.75L14.25 17m-8.5 4.25h12.5");
}
</style><path class="qwujceb6i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cloud-deploy-sharp"} {...others} />);
}

export default Component;
