import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tg11ftbmq {
  fill: currentColor;
  d: path("M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3M8 5h8v3H8zm8 14H8v-4h8zm2-4v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4z");
}

.ts7gutx-e {
  cx: 18px;
  cy: 11.5px;
  r: 1px;
  fill: currentColor;
}
</style><path class="tg11ftbmq"/><circle class="ts7gutx-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-local-printshop"} {...others} />);
}

export default Component;
