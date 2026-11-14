import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.onhtdubic {
  d: path("M7.5 3h9v8.5h-9Zm0 3h9M12 3v3");
}

.qkgn0lbks {
  d: path("M4 13.5a8 2.75 0 1 0 16 0a8 2.75 0 1 0-16 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z7scqubjs {
  d: path("M4 13.5v5a8 2.75 0 0 0 16 0v-5");
}
</style><g class="ulnmmdpxh"><path class="z7scqubjs"/><path class="qkgn0lbks"/><path class="onhtdubic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:display-podium"} {...others} />);
}

export default Component;
