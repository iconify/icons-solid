import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.poipd6bdd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 2.5h8v6H8ZM2.5 15h8v6h-8Zm11 0h8v6h-8Zm-2.75-9.5h2.5m-8 12.5h2.5m8.5 0h2.5M9.5 8.5l-3 6.5m8-6.5l3 6.5m-7 3h3");
}
</style><path class="poipd6bdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:alumni-network"} {...others} />);
}

export default Component;
