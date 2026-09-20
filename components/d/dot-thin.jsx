import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.rh29abc-m {
  fill: currentColor;
  d: path("M136 128a8 8 0 1 1-8-8a8 8 0 0 1 8 8");
}
</style><path class="rh29abc-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:dot-thin"} {...others} />);
}

export default Component;
