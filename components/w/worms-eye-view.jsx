import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jtt0fvy7v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 18c3.5 4.5 10.5 4.5 14 0c-3.5-4.5-10.5-4.5-14 0Zm7 0h.01M12 11.75v-5m-2.5 2.5l2.5-2.5l2.5 2.5M4 3.5h16");
}
</style><path class="jtt0fvy7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:worms-eye-view"} {...others} />);
}

export default Component;
