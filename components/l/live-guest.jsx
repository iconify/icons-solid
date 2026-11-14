import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bdxws-07q {
  d: path("M12.2 19.5H2.5v-16h19v11.7");
}

.svgjombsb {
  d: path("M8 9a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM5.5 19.5c0-3 2.25-5.25 5-5.25c1.088 0 2.098.352 2.921.964M18 15v6m-3-3h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bdxws-07q"/><path class="svgjombsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:live-guest"} {...others} />);
}

export default Component;
