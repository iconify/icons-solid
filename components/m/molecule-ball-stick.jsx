import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f9n_1nphy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm6.5-7a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm6.5 7a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-8-2.25l2.5-2.5m4 0l2.5 2.5");
}
</style><path class="f9n_1nphy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:molecule-ball-stick"} {...others} />);
}

export default Component;
