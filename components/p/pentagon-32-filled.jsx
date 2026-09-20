import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.h4k800hdu {
  fill: currentColor;
  d: path("M17.91 2.602a3.25 3.25 0 0 0-3.82 0L3.847 10.043a3.25 3.25 0 0 0-1.18 3.634l3.911 12.04a3.25 3.25 0 0 0 3.091 2.246h12.66a3.25 3.25 0 0 0 3.09-2.246l3.912-12.04a3.25 3.25 0 0 0-1.18-3.634z");
}
</style><path class="h4k800hdu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:pentagon-32-filled"} {...others} />);
}

export default Component;
