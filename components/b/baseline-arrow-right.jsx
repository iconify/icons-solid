import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dsmckdbwm {
  fill: currentColor;
  d: path("m10 17l5-5l-5-5z");
}
</style><path class="dsmckdbwm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-arrow-right"} {...others} />);
}

export default Component;
