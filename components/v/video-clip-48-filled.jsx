import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ldpgifbkh {
  fill: currentColor;
  d: path("M10.25 8A6.25 6.25 0 0 0 4 14.25v19.5A6.25 6.25 0 0 0 10.25 40h27.5A6.25 6.25 0 0 0 44 33.75v-19.5A6.25 6.25 0 0 0 37.75 8zM18 18a1.5 1.5 0 0 1 2.218-1.317l11 6a1.5 1.5 0 0 1 0 2.634l-11 6A1.5 1.5 0 0 1 18 30z");
}
</style><path class="ldpgifbkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:video-clip-48-filled"} {...others} />);
}

export default Component;
