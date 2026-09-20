import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d0_t3qb1t {
  fill: currentColor;
  d: path("M2 22L22 2v11h-2V6.825L6.825 20H13v2zm13 0v-7h2v7zm4 0v-7h2v7zm-5.575-8.6");
}
</style><path class="d0_t3qb1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:signal-cellular-pause-outline"} {...others} />);
}

export default Component;
