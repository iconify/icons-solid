import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rmxz-cb0x {
  fill: currentColor;
  d: path("M2 20V8h3V4h6v4h2V4h6v4h3v12z");
}
</style><path class="rmxz-cb0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:brick"} {...others} />);
}

export default Component;
