import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.m1kuipbpo {
  fill: var(--svg-color--e05206, #e05206);
  d: path("M32 5H4a4 4 0 0 0-4 4v4h36V9a4 4 0 0 0-4-4");
}

.mfz-6wltb {
  cx: 18px;
  cy: 18px;
  r: 4px;
  fill: var(--svg-color--e05206, #e05206);
}

.qqv_xg1zu {
  fill: var(--svg-color--0db02b, #0db02b);
  d: path("M32 31H4a4 4 0 0 1-4-4v-4h36v4a4 4 0 0 1-4 4");
}

.vbxe0xtoi {
  fill: var(--svg-color--eee, #eee);
  d: path("M0 13h36v10H0z");
}
</style><path class="vbxe0xtoi"/><path class="m1kuipbpo"/><circle class="mfz-6wltb"/><path class="qqv_xg1zu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:flag-niger"} {...others} />);
}

export default Component;
