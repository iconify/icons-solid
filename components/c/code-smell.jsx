import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d7e8oeb0e {
  d: path("M8.25 7L6 9.5L8.25 12m3.5-5L14 9.5L11.75 12m4.75 9.75c-1.75-2.25 1.75-5.5 0-7.75m4 7.75c-1.75-2.25 1.75-5.5 0-7.75");
}

.jgy-5pbrl {
  d: path("M13.3 19.5H3v-17h14v7.6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jgy-5pbrl"/><path class="d7e8oeb0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:code-smell"} {...others} />);
}

export default Component;
