import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.abg-r8b_z {
  fill: currentColor;
  d: path("M3.25 10h4v10a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1ZM10 14h4v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1Zm6.75-6.5h4V20a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1Z");
}

.q5o8qoa0n {
  d: path("M3.25 3h4v18h-4ZM10 3h4v18h-4Zm6.75 0h4v18h-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q5o8qoa0n"/><path class="abg-r8b_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:chart-bar-percent"} {...others} />);
}

export default Component;
