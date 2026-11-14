import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m0-h4docg {
  d: path("M2 12a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Z");
}

.tfngigbun {
  d: path("m7.5 9.5l2.25 1.75L9 14H6l-.75-2.75Zm0 0v-3m2.25 4.75l3-1M9 14l1.75 2.5M6 14l-1.75 2.5m1-5.25l-3-1M15.75 12h5.75m-3-3l3 3l-3 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m0-h4docg"/><path class="tfngigbun"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:soccer-pass"} {...others} />);
}

export default Component;
