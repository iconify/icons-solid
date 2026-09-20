import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.jn7d_4b5o {
  fill: currentColor;
  d: path("M216 68h-84l-26.67-20a20.12 20.12 0 0 0-12-4H40a20 20 0 0 0-20 20v136a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V88a20 20 0 0 0-20-20M44 68h48l16 12l-16 12H44Zm168 128H44v-80h49.33a20.12 20.12 0 0 0 12-4L132 92h80Z");
}
</style><path class="jn7d_4b5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:folder-notch-bold"} {...others} />);
}

export default Component;
