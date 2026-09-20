import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.kfabs9rmd {
  fill: currentColor;
  d: path("M171.76 131.76L209.51 94H88a50 50 0 0 0 0 100h88a6 6 0 0 1 0 12H88a62 62 0 0 1 0-124h121.51l-37.75-37.76a6 6 0 0 1 8.48-8.48l48 48a6 6 0 0 1 0 8.48l-48 48a6 6 0 0 1-8.48-8.48");
}
</style><path class="kfabs9rmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-u-up-right-light"} {...others} />);
}

export default Component;
