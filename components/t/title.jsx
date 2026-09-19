import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uqbie6beg {
  fill: currentColor;
  d: path("M5 4v3h5.5v12h3V7H19V4z");
}
</style><path class="uqbie6beg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:title"} {...others} />);
}

export default Component;
