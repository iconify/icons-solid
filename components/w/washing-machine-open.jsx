import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e7oxkoa8j {
  d: path("M2.5 2.5h12v19h-12Zm0 4.5h12");
}

.l-zfm87pz {
  d: path("M5.25 14a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0ZM17 14a2 4.5 0 1 0 4 0a2 4.5 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e7oxkoa8j"/><path class="l-zfm87pz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:washing-machine-open"} {...others} />);
}

export default Component;
