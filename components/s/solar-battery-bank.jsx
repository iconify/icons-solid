import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rycei8bxz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 21.4v.1H2.5v-17H11v9.1M5.25 4.5v-2h3v2M5.5 9H8m-2.5 3.5H8M5.5 16H8m7.75 1.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM17.5 14v-1m0 8v1M14 17.5h-1m8 0h1M15 15l-.75-.75M20 15l.75-.75M15 20l-.75.75M20 20l.75.75");
}
</style><path class="rycei8bxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:solar-battery-bank"} {...others} />);
}

export default Component;
