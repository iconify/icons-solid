import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.in7ad74oz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.665 21H3.5l6-12.5v-6h5v6l.606 1.262M14.75 21.75l4.75-5.5a2.5 2.5 0 1 0-3 0l4.75 5.5");
}
</style><path class="in7ad74oz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cause-cancer-research"} {...others} />);
}

export default Component;
