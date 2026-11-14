import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bojmf5bmt {
  d: path("M3 5.5h13v11H3Zm13 3h2.5l2.5 3v5h-5");
}

.rs3k_9r8m {
  d: path("M5.5 18a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM16 18a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM9.5 8.25v5.5m2.382-4.125l-4.764 2.75m4.764 0l-4.764-2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bojmf5bmt"/><path class="rs3k_9r8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cold-chain-grocery"} {...others} />);
}

export default Component;
