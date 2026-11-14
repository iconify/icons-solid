import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eur1fnb4e {
  d: path("M19.75 7.5a9 9 0 0 0-15.5 0");
}

.jsk2qyk6o {
  d: path("m3.5 4.5l.75 3L7 6.75M4.25 16.5a9 9 0 0 0 15.5 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vk4k2rdkd {
  d: path("m20.5 19.5l-.75-3l-2.75.75M12 7.5S9 11 9 13.25a3 3 0 0 0 6 0C15 11 12 7.5 12 7.5Z");
}
</style><g class="ulnmmdpxh"><path class="eur1fnb4e"/><path class="jsk2qyk6o"/><path class="vk4k2rdkd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:water-reuse"} {...others} />);
}

export default Component;
