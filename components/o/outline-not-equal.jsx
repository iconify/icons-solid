import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qukdhgbip {
  fill: currentColor;
  d: path("m14.08 4.605l1.84.79l-6 14l-1.84-.79z");
}

.uw5vu58kl {
  fill: currentColor;
  d: path("M19 9.998H5v-2h14zm0 6H5v-2h14z");
}
</style><path class="uw5vu58kl"/><path class="qukdhgbip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-not-equal"} {...others} />);
}

export default Component;
