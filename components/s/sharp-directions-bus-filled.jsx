import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wgu7_acfd {
  fill: currentColor;
  d: path("M12 2c-4 0-8 .5-8 4v9.5c0 .95.38 1.81 1 2.44V21h3v-2h8v2h3v-3.06c.62-.63 1-1.49 1-2.44V6c0-3.5-3.58-4-8-4M8.5 16c-.83 0-1.5-.67-1.5-1.5S7.67 13 8.5 13s1.5.67 1.5 1.5S9.33 16 8.5 16m7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m2.5-6H6V7h12z");
}
</style><path class="wgu7_acfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-directions-bus-filled"} {...others} />);
}

export default Component;
