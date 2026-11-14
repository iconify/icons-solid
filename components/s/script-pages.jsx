import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g_6tshbvk {
  d: path("M3.5 5.5H17v16H3.5Z");
}

.rxpm5ub7n {
  d: path("M6.5 2.5h12a2 2 0 0 1 2 2v14m-14-9H14m-5.5 4H14m-5.5 4h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g_6tshbvk"/><path class="rxpm5ub7n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:script-pages"} {...others} />);
}

export default Component;
