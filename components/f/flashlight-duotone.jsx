import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.liw5wgb4y {
  d: path("M184 16H72a16 16 0 0 0-16 16v45.33a16.12 16.12 0 0 0 3.2 9.6L80 114.67V224a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V114.67l20.8-27.74a16.12 16.12 0 0 0 3.2-9.6V32a16 16 0 0 0-16-16M72 32h112v24H72zm91.2 73.07a16.12 16.12 0 0 0-3.2 9.6V224H96V114.67a16.12 16.12 0 0 0-3.2-9.6L72 77.33V72h112v5.33ZM136 120v32a8 8 0 0 1-16 0v-32a8 8 0 0 1 16 0");
}

.wuab8zbmi {
  d: path("M192 64v13.33a8 8 0 0 1-1.6 4.8l-20.8 27.74a8 8 0 0 0-1.6 4.8V224a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8V114.67a8 8 0 0 0-1.6-4.8L65.6 82.13a8 8 0 0 1-1.6-4.8V64Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="wuab8zbmi"/><path class="liw5wgb4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:flashlight-duotone"} {...others} />);
}

export default Component;
