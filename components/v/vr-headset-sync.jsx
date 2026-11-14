import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ae8ff6nnh {
  d: path("M9.5 9.5h5a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2ZM5.25 12H7.5m9 0h2.25");
}

.ulne_dbqz {
  d: path("M2.5 12a9.5 9.5 0 0 1 17.25-5.5m-3-.5l3 .5l.5-3M21.5 12a9.5 9.5 0 0 1-17.25 5.5m3 .5l-3-.5l-.5 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ae8ff6nnh"/><path class="ulne_dbqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:vr-headset-sync"} {...others} />);
}

export default Component;
