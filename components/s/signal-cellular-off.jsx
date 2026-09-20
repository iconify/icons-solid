import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ys9nsw2mn {
  fill: currentColor;
  d: path("m20.775 23.6l-1.6-1.6H2l8.6-8.6l-8.2-8.175L3.8 3.8l18.4 18.4zM22 19.2l-8.6-8.6L22 2z");
}
</style><path class="ys9nsw2mn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:signal-cellular-off"} {...others} />);
}

export default Component;
