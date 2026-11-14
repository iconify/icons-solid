import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nvq0q2bgl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.5c-2-2-4.5-4.75-4.5-7.75a4.5 4.5 0 0 1 9 0c0 3-2.5 5.75-4.5 7.75ZM5 9.25C3.75 8 2.5 6.75 2.5 5a2.5 2.5 0 0 1 5 0c0 1.75-1.25 3-2.5 4.25Zm13.5 1.5c-1.25-1.25-3-2.75-3-5.25a3 3 0 0 1 6 0c0 2.5-1.75 4-3 5.25Zm-6.5 3h.01");
}
</style><path class="nvq0q2bgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:map-pins-multiple"} {...others} />);
}

export default Component;
