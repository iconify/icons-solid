import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wrez5ybmg {
  fill: currentColor;
  d: path("M12 14.708L6.692 9.4l.708-.708l4.6 4.6l4.6-4.6l.708.708z");
}
</style><path class="wrez5ybmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:keyboard-arrow-down"} {...others} />);
}

export default Component;
