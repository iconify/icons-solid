import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a6vzn6bei {
  d: path("M16.5 10.5h3v5h-3Zm-8.5 3l-3-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zis83bc9d {
  d: path("M4.5 21h9M8 21V8a5 5 0 0 1 10 0v2.5");
}
</style><g class="ulnmmdpxh"><path class="zis83bc9d"/><path class="a6vzn6bei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pull-out-tap"} {...others} />);
}

export default Component;
