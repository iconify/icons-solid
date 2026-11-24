import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aec7lkj0a {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3.196 21.981a1 1 0 0 1-1.177-1.177l.935-4.673A9.946 9.946 0 0 1 19.032 4.968A9.945 9.945 0 0 1 7.869 21.046Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.znrligbuz {
  d: path("M7 16v-3c0-.265.105-.52.293-.707l5-5a.997.997 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-5 5A1 1 0 0 1 11 17H8a1 1 0 0 1-1-1");
}
</style><g class="cuyn6tgcc"><path class="aec7lkj0a"/><path class="znrligbuz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chat-circle-edit-bulk-round"} {...others} />);
}

export default Component;
