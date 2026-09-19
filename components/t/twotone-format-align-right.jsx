import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nqv8g3jbu {
  fill: currentColor;
  d: path("M3 3h18v2H3zm0 16h18v2H3zm0-8h18v2H3zm6 4h12v2H9zm0-8h12v2H9z");
}
</style><path class="nqv8g3jbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-format-align-right"} {...others} />);
}

export default Component;
