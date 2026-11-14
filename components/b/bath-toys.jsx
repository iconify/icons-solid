import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fr7ygbcyg {
  d: path("M5 13a3.75 3.75 0 1 1 6.75-2c1.25 2.5 4.75 2.5 8.25.5c.5 5-3 8.5-7.5 8.5c-5 0-7.5-3-7.5-7Z");
}

.htisrebay {
  d: path("m11.75 7.5l2.75.75l-2.75 1Zm-4 1h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fr7ygbcyg"/><path class="htisrebay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bath-toys"} {...others} />);
}

export default Component;
