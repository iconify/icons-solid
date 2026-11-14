import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jxqtwpbyn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 7.5h6a3 2.5 0 0 1-6 0Zm-3 5h12a6 3 0 0 1-12 0Zm-3 5h18a9 3.5 0 0 1-18 0ZM12 3v4.5m0 2.5v2.5m0 3v2");
}
</style><path class="jxqtwpbyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:chocolate-fountain"} {...others} />);
}

export default Component;
