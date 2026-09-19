import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qmryyxabf {
  fill: currentColor;
  d: path("M13.22 22.61c-.4.15-.8.29-1.22.39c-5.16-1.26-9-6.45-9-12V5l9-4l9 4v6c0 .9-.11 1.78-.3 2.65c-.81-.41-1.73-.65-2.7-.65c-3.31 0-6 2.69-6 6c0 1.36.46 2.61 1.22 3.61M19 20v2.99s-1.99.01-2 0V20h-3v-2h3v-3h2v3h3v2z");
}
</style><path class="qmryyxabf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-add-moderator"} {...others} />);
}

export default Component;
