import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ja270jcoj {
  d: path("M4 4h12.5L20 7.5V20H4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdutghbid {
  d: path("M7.5 20v-5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v5M8 4v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4");
}
</style><g class="ulnmmdpxh"><path class="ja270jcoj"/><path class="zdutghbid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:save"} {...others} />);
}

export default Component;
