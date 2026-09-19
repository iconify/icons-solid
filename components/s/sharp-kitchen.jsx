import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cui74ac_d {
  fill: currentColor;
  d: path("M20 2.01L4 2v20h16zM18 20H6v-9.02h12zm0-11H6V4h12zM8 5h2v3H8zm0 7h2v5H8z");
}
</style><path class="cui74ac_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-kitchen"} {...others} />);
}

export default Component;
