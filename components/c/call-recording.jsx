import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j1xd0zbhi {
  fill: currentColor;
  d: path("M16.5 19.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ykzmgzbdo {
  d: path("M17.5 2.5h-3L13 7l2 1.5C14 11 11 14 8.5 15L7 13l-4.5 1.5v3a2 2 0 0 0 2 2c8.5 0 15-6.5 15-15a2 2 0 0 0-2-2Z");
}
</style><g class="ulnmmdpxh"><path class="ykzmgzbdo"/><path class="j1xd0zbhi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:call-recording"} {...others} />);
}

export default Component;
