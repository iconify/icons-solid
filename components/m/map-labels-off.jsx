import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.abcix0jkk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.718 3.761L8.5 3.5l7 2l6-2v14.071m-5.19 2.659l-.81.27l-7-2l-6 2V6.458M13.4 9.5H17m-10 5h3.6m-7.1-11l17 17");
}
</style><path class="abcix0jkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:map-labels-off"} {...others} />);
}

export default Component;
