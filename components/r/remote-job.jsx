import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.orj0xob0g {
  d: path("M2.5 3h13v8.5h-13ZM2 14h11.5m1 3.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vkn4jwb4d {
  d: path("M16.5 17.5a1.5 3.5 0 1 0 3 0a1.5 3.5 0 1 0-3 0Zm-2 0h7");
}
</style><g class="ulnmmdpxh"><path class="orj0xob0g"/><path class="vkn4jwb4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:remote-job"} {...others} />);
}

export default Component;
