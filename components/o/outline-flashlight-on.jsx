import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mk09fccfu {
  fill: currentColor;
  d: path("M18 2H6v6l2 3v11h8V11l2-3zm-2 2v1H8V4zm-2 6.4V20h-4v-9.61l-2-3V7h8v.39z");
}

.xzditrbqy {
  cx: 12px;
  cy: 14px;
  r: 1.5px;
  fill: currentColor;
}
</style><path class="mk09fccfu"/><circle class="xzditrbqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-flashlight-on"} {...others} />);
}

export default Component;
