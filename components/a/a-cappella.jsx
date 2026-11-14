import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e4-mtkwyl {
  d: path("M10 2.5h4v6h-4Z");
}

.kwjopybzm {
  d: path("M8 6.5a4 4 0 0 0 8 0m-11.25 7a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 1 1 0-3.5Zm-2.5 8.25c0-1.25 1-2 2.5-2s2.5.75 2.5 2M12 13.5a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 1 1 0-3.5Zm-2.5 8.25c0-1.25 1-2 2.5-2s2.5.75 2.5 2m4.75-8.25a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 1 1 0-3.5Zm-2.5 8.25c0-1.25 1-2 2.5-2s2.5.75 2.5 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e4-mtkwyl"/><path class="kwjopybzm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:a-cappella"} {...others} />);
}

export default Component;
