import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dyb_byx3u {
  fill: currentColor;
  d: path("M11 22v-8.5H3v-3h8V2h2v8.5h8v3h-8V22z");
}
</style><path class="dyb_byx3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:align-flex-center"} {...others} />);
}

export default Component;
