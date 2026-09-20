import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.k4pkv1kde {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m45.66 125.66a8 8 0 0 1-11.32 0L128 115.31l-34.34 34.35a8 8 0 0 1-11.32-11.32l40-40a8 8 0 0 1 11.32 0l40 40a8 8 0 0 1 0 11.32");
}
</style><path class="k4pkv1kde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:caret-circle-up-fill"} {...others} />);
}

export default Component;
