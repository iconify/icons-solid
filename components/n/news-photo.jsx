import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h2844mzsd {
  d: path("M7 5.5h10V14H7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wffwdccte {
  d: path("M4 2.5h16v19H4Z");
}

.x7xqwibku {
  d: path("M9.5 14v-3.5l2.5-2l2.5 2V14M7 17.5h10");
}
</style><g class="ulnmmdpxh"><path class="wffwdccte"/><path class="h2844mzsd"/><path class="x7xqwibku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:news-photo"} {...others} />);
}

export default Component;
