import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.smx72ro4f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5h7.4v37H5.5zm14.8 0h22.2v7.4H20.3zm0 14.8h22.2v7.4H20.3zm0 14.8h22.2v7.4H20.3z");
}
</style><path class="smx72ro4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:esign"} {...others} />);
}

export default Component;
