import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.qjltbu0ug {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M16.828 15.586L8.414 7.172l4.879-4.879A1 1 0 0 1 15 3v7h5a1.002 1.002 0 0 1 .707 1.707ZM14 17l.707.707l-4 4A1 1 0 0 1 9 21v-7H4a1.002 1.002 0 0 1-.707-1.707l3-3Z");
}

.scc1kvjkf {
  d: path("m2.707 4.293l17 17a.999.999 0 1 1-1.414 1.414l-17-17a.999.999 0 1 1 1.414-1.414");
}
</style><g class="cuyn6tgcc"><path class="qjltbu0ug"/><path class="scc1kvjkf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:zap-off-bulk-sharp"} {...others} />);
}

export default Component;
