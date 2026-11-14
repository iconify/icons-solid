import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u7l086bdj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4.5H10v3H3.5Zm1 3v14H9v-14m5.75 0A1.75 1.75 0 0 1 16 4.25a2.5 2.5 0 0 1 4.5 0a1.75 1.75 0 0 1 0 3.25Z");
}
</style><path class="u7l086bdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:chimney-stack"} {...others} />);
}

export default Component;
