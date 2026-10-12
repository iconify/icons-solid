import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vqnbykb7l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 5.25h16.5v16H3.75zm3.75-2.5v4.5m3-4.5v4.5m3-4.5v4.5m3-4.5v4.5m-8.75 4.5h8.5m-8.5 4h5.5");
}
</style><path class="vqnbykb7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:notebook-spiral-sharp"} {...others} />);
}

export default Component;
