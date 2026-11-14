import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gd7g9kbwa {
  d: path("M3 9.5c0-1.1 1.8-2 4-2s4 .9 4 2V19c0 1.1-1.8 2-4 2s-4-.9-4-2Zm10 4c0-1.1 1.8-2 4-2s4 .9 4 2V19c0 1.1-1.8 2-4 2s-4-.9-4-2Z");
}

.u8mdvo6sb {
  d: path("M3 9.5c0 1.1 1.8 2 4 2s4-.9 4-2m-8 4.75c0 1.1 1.8 2 4 2s4-.9 4-2m2-.75c0 1.1 1.8 2 4 2s4-.9 4-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gd7g9kbwa"/><path class="u8mdvo6sb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:coin-pile"} {...others} />);
}

export default Component;
