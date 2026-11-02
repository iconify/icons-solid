import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.j-f779bio {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8.707 8.293L10.414 10H15a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h3c.265 0 .52.105.707.293");
}

.ox4-fyvuv {
  d: path("M6 5v-.001A3 3 0 0 1 9 2h3c.265 0 .52.105.707.293L14.414 4H19a3.004 3.004 0 0 1 3 3v8a1 1 0 0 1-2 0V7a1 1 0 0 0-1-1h-5a1 1 0 0 1-.707-.293L11.586 4H9a1 1 0 0 0-1 1a1 1 0 0 1-2 0");
}
</style><g class="cuyn6tgcc"><path class="j-f779bio"/><path class="ox4-fyvuv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:folders-bulk"} {...others} />);
}

export default Component;
