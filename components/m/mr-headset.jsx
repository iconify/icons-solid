import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w1eiarbdz {
  d: path("M7 9.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm7 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM2 16.25a10 2.5 0 1 0 20 0a10 2.5 0 1 0-20 0Z");
}

.x6xc_hbpe {
  d: path("M4.5 5.25h15a1 1 0 0 1 1 1v8.5a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-8.5a1 1 0 0 1 1-1Z");
}
</style><g class="ulnmmdpxh"><path class="x6xc_hbpe"/><path class="w1eiarbdz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:mr-headset"} {...others} />);
}

export default Component;
