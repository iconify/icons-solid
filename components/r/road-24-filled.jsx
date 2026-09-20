import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wmbz_zbcr {
  fill: currentColor;
  d: path("M6 3a1 1 0 0 0-2 0v18a1 1 0 1 0 2 0zm14 0a1 1 0 1 0-2 0v18a1 1 0 1 0 2 0zm-7 0a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zm-2 10.5a1 1 0 1 0 2 0v-3a1 1 0 1 0-2 0zm0 4.5a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0z");
}
</style><path class="wmbz_zbcr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:road-24-filled"} {...others} />);
}

export default Component;
