import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k8l68rbei {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 9h6v6H9ZM4.5 2.5a2 2 0 1 0 0 4a2 2 0 1 0 0-4Zm15 0a2 2 0 1 0 0 4a2 2 0 1 0 0-4Zm-15 15a2 2 0 1 0 0 4a2 2 0 1 0 0-4Zm15 0a2 2 0 1 0 0 4a2 2 0 1 0 0-4ZM6 6l3.5 3.5M18 6l-3.5 3.5M6 18l3.5-3.5M18 18l-3.5-3.5M9 12h6");
}
</style><path class="k8l68rbei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:core-network"} {...others} />);
}

export default Component;
