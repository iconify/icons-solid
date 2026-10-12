import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f2yefubgx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 11.75H20.5v6.75h-4v2.75h-9V18.5h-4v-6.75zM8 14v2m2.67-2v2m2.66-2v2M16 14v2M9.7 7.95L12 5.646l2.3 2.304m-6.9-2.3a6.5 6.5 0 0 1 9.2 0");
}
</style><path class="f2yefubgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:open-port-sharp"} {...others} />);
}

export default Component;
