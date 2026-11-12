import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.gnw1wnccj {
  d: path("M8 11h3V7a1 1 0 0 1 2 0v4h3a3.004 3.004 0 0 1 3 3v3.586l1.293-1.293a.999.999 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a.999.999 0 1 1 1.414-1.414L17 17.586V14a1 1 0 0 0-1-1H7.998A1 1 0 0 0 7 14v3.586l1.293-1.293a.999.999 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.413.001h-.001l-3-3.001a.999.999 0 1 1 1.414-1.414L5 17.586v-3.587A3 3 0 0 1 8 11");
}

.j6-cpacfl {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M9 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0");
}
</style><g class="cuyn6tgcc"><path class="j6-cpacfl"/><path class="gnw1wnccj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:network-split-bulk"} {...others} />);
}

export default Component;
