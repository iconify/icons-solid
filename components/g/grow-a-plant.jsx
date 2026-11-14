import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vj9p3zicu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 13h14l-1.5 8.5h-11Zm7 0V7.5M12 9c0-3-2.5-4.5-5.5-4.5C6.5 7.5 9 9 12 9Zm0-1.5c0-3 2.5-4.5 5.5-4.5c0 3-2.5 4.5-5.5 4.5Z");
}
</style><path class="vj9p3zicu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:grow-a-plant"} {...others} />);
}

export default Component;
