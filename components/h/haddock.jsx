import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u2zyuxbou {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 12c2-4 4.5-5 7.5-5s5.5 2.5 6.5 5c-1 2.5-3.5 5-6.5 5s-5.5-1-7.5-5Zm0 0L3 7.5c.5 2 1.5 3.5 2 4.5c-.5 1-1.5 2.5-2 4.5Zm10.5-.5h.01m-4.76-1h.01");
}
</style><path class="u2zyuxbou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:haddock"} {...others} />);
}

export default Component;
