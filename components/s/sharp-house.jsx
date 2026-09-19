import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sl-byef7f {
  fill: currentColor;
  d: path("M19 9.3V4h-3v2.6L12 3L2 12h3v8h5v-6h4v6h5v-8h3zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2z");
}
</style><path class="sl-byef7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-house"} {...others} />);
}

export default Component;
