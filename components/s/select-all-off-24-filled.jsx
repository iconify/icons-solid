import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nkwmikzhc {
  fill: currentColor;
  d: path("M6.25 3A3.25 3.25 0 0 0 3 6.25v9.5A3.25 3.25 0 0 0 6.25 19h9.5A3.25 3.25 0 0 0 19 15.75v-9.5A3.25 3.25 0 0 0 15.75 3zm2.991 18.5A3.25 3.25 0 0 1 6.5 19.999h9.746A3.753 3.753 0 0 0 20 16.246V6.5a3.25 3.25 0 0 1 1.5 2.741v7.005a5.254 5.254 0 0 1-5.254 5.254z");
}
</style><path class="nkwmikzhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:select-all-off-24-filled"} {...others} />);
}

export default Component;
