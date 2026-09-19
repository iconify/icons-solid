import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.rzo848bqa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.058 31.888c-6.265-6.266-6.265-16.424 0-22.689s16.424-6.265 22.69 0zm15.884-15.776c6.265 6.266 6.265 16.424 0 22.689c-6.266 6.265-16.424 6.265-22.69 0z");
}
</style><path class="rzo848bqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:securitybank"} {...others} />);
}

export default Component;
