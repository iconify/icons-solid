import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eoz3zibrm {
  d: path("M4.5 2.5h15v19h-15Z");
}

.lyd3o6epz {
  d: path("M7 7.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm3.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm3.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM7 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm3.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm3.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-5.5 5h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eoz3zibrm"/><path class="lyd3o6epz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bubble-sheet"} {...others} />);
}

export default Component;
