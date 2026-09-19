import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k25incbyk {
  fill: currentColor;
  d: path("M5 1v22h14V1zm12 17H7V6h10zm-1-7.95l-1.41-1.41l-3.54 3.54l-1.41-1.41l-1.41 1.41L11.05 15z");
}
</style><path class="k25incbyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-security-update-good"} {...others} />);
}

export default Component;
