import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n35-htkzb {
  fill: currentColor;
  d: path("M6 19v-4h1.616v4z");
}
</style><path class="n35-htkzb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:signal-cellular-alt-1-bar-outline"} {...others} />);
}

export default Component;
