import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aiuzeunwd {
  d: path("M8 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm3.5-.5a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Zm2.5 1a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}

.slen4mi6u {
  d: path("M6.5 9h11c0-2.5 4-3 4-.25c0 1.5-1.25 2.25-2 3.25c.75 1 2 1.75 2 3.25c0 2.75-4 2.25-4-.25h-11c0 2.5-4 3-4 .25c0-1.5 1.25-2.25 2-3.25c-.75-1-2-1.75-2-3.25c0-2.75 4-2.25 4 .25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="slen4mi6u"/><path class="aiuzeunwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:osteoporosis"} {...others} />);
}

export default Component;
