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

.zz-whu1sa {
  d: path("M16.707 11.293a1 1 0 0 1 0 1.414l-3 3a.999.999 0 1 1-1.414-1.414L13.586 13H9v2a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1h5.586l-1.293-1.293a.999.999 0 1 1 1.414-1.414Z");
}
</style><g class="cuyn6tgcc"><path class="aec7lkj0a"/><path class="zz-whu1sa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chat-circle-share-bulk-sharp"} {...others} />);
}

export default Component;
