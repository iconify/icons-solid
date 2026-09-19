import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ka37b4bpq {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-3, 0.3);
  d: path("M17 4h-3V2h-4v2H7v4h5.47L13 7v1h4z");
}

.udcimlx6s {
  fill: currentColor;
  d: path("M13 12.5h2L11 20v-5.5H9L12.47 8H7v14h10V8h-4z");
}
</style><path class="ka37b4bpq"/><path class="udcimlx6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-battery-charging-90"} {...others} />);
}

export default Component;
