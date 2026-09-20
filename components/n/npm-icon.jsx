import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.oxq7w1buj {
  fill: var(--svg-color--c12127, #c12127);
  d: path("M0 256V0h256v256z");
}

.tvwpl1bgp {
  fill: var(--svg-color--fff, #fff);
  d: path("M48 48h160v160h-32V80h-48v128H48z");
}
</style><path class="oxq7w1buj"/><path class="tvwpl1bgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:npm-icon"} {...others} />);
}

export default Component;
