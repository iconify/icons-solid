import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.podvklb2e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.368 13.168l9.83-6.883l1.434 2.047l-9.83 6.883ZM12 12.25v8.25m-3 0h6M4 4l4.5 4.5m-3 0h3v-3m12 11.5l-4-4m0 3v-3h3");
}
</style><path class="podvklb2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bifacial-panel"} {...others} />);
}

export default Component;
