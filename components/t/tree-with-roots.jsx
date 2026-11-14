import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zh5j49bbd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5L16.5 8H15l3.5 5.5h-13L9 8H7.5Zm0 11v8m0-4.5c-1.5.5-5 2.5-7 4.5m7-4.5c1.5.5 5 2.5 7 4.5");
}
</style><path class="zh5j49bbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:tree-with-roots"} {...others} />);
}

export default Component;
