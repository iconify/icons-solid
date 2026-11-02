import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kfv8xnp-m {
  fill: currentColor;
  d: path("M15 2a4 4 0 0 1 2.646 7A4 4 0 0 1 13 15.465V18a4 4 0 1 1-6.646-3a4 4 0 0 1 0-6A4 4 0 0 1 9 2Z");
}
</style><path class="kfv8xnp-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:figma-fill-sharp"} {...others} />);
}

export default Component;
