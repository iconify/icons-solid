import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.awowfmfwe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.868 15.889L15.889 3.868a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L8.111 20.132a1 1 0 0 1-1.414 0l-2.829-2.829a1 1 0 0 1 0-1.414Zm1.591-4.066l6.718 6.718m-.354-13.082l6.718 6.718");
}
</style><path class="awowfmfwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:wakeboard"} {...others} />);
}

export default Component;
