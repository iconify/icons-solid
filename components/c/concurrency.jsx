import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l02t2qs1j {
  d: path("M19.5 3.5L21 6l-2.75 1M3 18q8-7 16-4");
}

.nb6fasbvt {
  d: path("M5 10q8-7 16-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vypfsppjx {
  d: path("M17.5 11.5L19 14l-2.75 1");
}
</style><g class="ulnmmdpxh"><path class="nb6fasbvt"/><path class="l02t2qs1j"/><path class="vypfsppjx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:concurrency"} {...others} />);
}

export default Component;
