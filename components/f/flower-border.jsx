import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ztrqkab8b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19.5h19M3 9l2 1.5L7 9v2.5a2 2 0 0 1-4 0Zm7-4.5L12 6l2-1.5V7a2 2 0 0 1-4 0ZM17 9l2 1.5L21 9v2.5a2 2 0 0 1-4 0ZM5 13.5v6M12 9v10.5m7-6v6");
}
</style><path class="ztrqkab8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:flower-border"} {...others} />);
}

export default Component;
