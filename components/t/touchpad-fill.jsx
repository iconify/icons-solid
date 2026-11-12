import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.thf00h5wg {
  fill: currentColor;
  d: path("M5 4h14a3 3 0 0 1 3 3v6H2V7a3 3 0 0 1 3-3m6 16H5a3 3 0 0 1-3-3v-2h9Zm11-5v2a3 3 0 0 1-3 3h-6v-5Z");
}
</style><path class="thf00h5wg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:touchpad-fill"} {...others} />);
}

export default Component;
