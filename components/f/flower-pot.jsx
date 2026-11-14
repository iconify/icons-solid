import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zm_2fn1pb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.25a1.75 1.75 0 0 1 2.75 1.5a1.75 1.75 0 0 1 0 3.5A1.75 1.75 0 0 1 12 9.75a1.75 1.75 0 0 1-2.75-1.5a1.75 1.75 0 0 1 0-3.5A1.75 1.75 0 0 1 12 3.25Zm0 6.5V13m-7 0h14v3H5Zm1.5 3l1.25 5.5h8.5L17.5 16M12 6.5h.01");
}
</style><path class="zm_2fn1pb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:flower-pot"} {...others} />);
}

export default Component;
