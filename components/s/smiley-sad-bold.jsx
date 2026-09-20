import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.war207b7u {
  fill: currentColor;
  d: path("M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84M76 108a16 16 0 1 1 16 16a16 16 0 0 1-16-16m104 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-3.26 57a12 12 0 0 1-19.48 14a36 36 0 0 0-58.52 0a12 12 0 0 1-19.48-14a60 60 0 0 1 97.48 0");
}
</style><path class="war207b7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:smiley-sad-bold"} {...others} />);
}

export default Component;
