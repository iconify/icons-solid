import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jff7e60oo {
  d: path("M17.75 3.75L20.5 6.5l-2.75 2.75M2.5 19q3-4.125 6 0t6 0t6 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vqinnyyzz {
  d: path("M3.5 13.5c4.5 0 5.5-7 10.5-7h6.5");
}
</style><g class="ulnmmdpxh"><path class="vqinnyyzz"/><path class="jff7e60oo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ocean-current"} {...others} />);
}

export default Component;
