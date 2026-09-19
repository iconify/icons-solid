import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.xh1u-3bon {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m41.426 19.656l-9.81 9.81l6.54 6.541c-7.225 7.225-18.938 7.225-26.163 0s-7.225-18.937 0-26.162l13.08 13.08l-18.5 18.5M28.344 6.574l-7.358 7.358");
}
</style><path class="xh1u-3bon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:shell-recharge"} {...others} />);
}

export default Component;
