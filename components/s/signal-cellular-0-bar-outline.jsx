import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zeyzhjsft {
  fill: currentColor;
  d: path("M2 22L22 2v20zm4.825-2H20V6.85z");
}
</style><path class="zeyzhjsft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:signal-cellular-0-bar-outline"} {...others} />);
}

export default Component;
