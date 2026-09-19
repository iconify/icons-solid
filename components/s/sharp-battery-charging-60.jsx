import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ipfvtgbrq {
  fill: currentColor;
  d: path("M13 12.5h2L11 20v-5.5H9l1.87-3.5H7v11h10V11h-4z");
}

.lyow0wb0a {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-3, 0.3);
  d: path("M17 4h-3V2h-4v2H7v7h3.87L13 7v4h4z");
}
</style><path class="lyow0wb0a"/><path class="ipfvtgbrq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-battery-charging-60"} {...others} />);
}

export default Component;
