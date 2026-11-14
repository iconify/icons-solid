import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.isjg3_b9j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 9.5c-1.25-1.75-2.5-3-4.5-3a3 3 0 0 0 0 6c2 0 3.25-1.25 4.5-3s2.5-3 4.5-3a3 3 0 0 1 0 6c-2 0-3.25-1.25-4.5-3Zm-3.5 7L12 20l3.5-3.5");
}
</style><path class="isjg3_b9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:infinite-scroll"} {...others} />);
}

export default Component;
