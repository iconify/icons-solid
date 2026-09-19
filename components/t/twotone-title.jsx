import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t7ual1e1t {
  fill: currentColor;
  d: path("M5 7h5.5v12h3V7H19V4H5z");
}
</style><path class="t7ual1e1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-title"} {...others} />);
}

export default Component;
