import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rmbdclcsf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3s6 5.5 6 11a6 6 0 0 1-12 0c0-2.75 1.75-4.5 3-6c0 1.75.75 3 2 3c-.5-2.75 0-5.5 1-8ZM9.5 21.5h5");
}
</style><path class="rmbdclcsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:learning-streak"} {...others} />);
}

export default Component;
