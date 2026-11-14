import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e7jddmblr {
  d: path("M2.75 3v18h18Z");
}

.nkmxszbbm {
  d: path("M6.25 12v5.5h5.5Zm4.75.5l1.25-3.25l6-6l2 2l-6 6Zm1.25-3.25l2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e7jddmblr"/><path class="nkmxszbbm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:architect-studio"} {...others} />);
}

export default Component;
