import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.v8d400w_d {
  fill: currentColor;
  d: path("M5.75 4A3.75 3.75 0 0 0 2 7.75v12.5A3.75 3.75 0 0 0 5.75 24h16.5A3.75 3.75 0 0 0 26 20.25V7.75A3.75 3.75 0 0 0 22.25 4zM10 10.251a1 1 0 0 1 1.472-.881l7 3.75a1 1 0 0 1 0 1.763l-7 3.75A1 1 0 0 1 10 17.75z");
}
</style><path class="v8d400w_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:video-clip-28-filled"} {...others} />);
}

export default Component;
