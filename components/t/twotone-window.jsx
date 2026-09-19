import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fii22wc0c {
  fill: currentColor;
  d: path("M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-8 16H5v-6h6zm0-8H5V5h6zm8 8h-6v-6h6zm0-8h-6V5h6z");
}

.m3_8-70xs {
  fill: currentColor;
  d: path("M13 13h6v6h-6zm-8 0h6v6H5zm0-8h6v6H5zm8 0h6v6h-6z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="m3_8-70xs"/><path class="fii22wc0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-window"} {...others} />);
}

export default Component;
