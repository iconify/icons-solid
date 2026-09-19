import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ercr9nyht {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-3, 0.3);
  d: path("M17 4h-3V2h-4v2H7v13h4v-2.5H9L13 7v5.5h2L12.6 17H17z");
}

.xt_mqcbkw {
  fill: currentColor;
  d: path("M11 20v-3H7v5h10v-5h-4.4z");
}
</style><path class="xt_mqcbkw"/><path class="ercr9nyht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-battery-charging-20"} {...others} />);
}

export default Component;
