import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b8egld_yp {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M12 9a3 3 0 0 0-3 3v8a1 1 0 0 1-.804.981l-5 1a1 1 0 0 1-1.177-1.177l.935-4.673a9.943 9.943 0 0 1 17.94-8.578A1 1 0 0 1 20 9Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.kr7uci4ro {
  d: path("M14.236 14.832A3 3 0 1 1 17 19a1 1 0 0 1 0-2a1.001 1.001 0 0 0 .707-1.707a1 1 0 0 0-1.094-.215A.99.99 0 0 0 16 16a1 1 0 0 1-2 0a3 3 0 0 1 .236-1.168M17.01 20a1 1 0 0 1 0 2H17a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="b8egld_yp"/><path class="kr7uci4ro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chat-circle-help-corner-bulk-round"} {...others} />);
}

export default Component;
