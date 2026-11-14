import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fzr6g1bfo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5h3.5L5.5 6L7 17.5l-2.25 3l-2.25-3L4 6Zm7.25 0h3.5l-1 3.5l1.5 11.5l-2.25 3l-2.25-3L11.25 6Zm7.25 0H21L20 6l1.5 11.5l-2.25 3l-2.25-3L18.5 6ZM4 6h1.5m5.75 0h1.5m5.75 0H20");
}
</style><path class="fzr6g1bfo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:executive-team"} {...others} />);
}

export default Component;
