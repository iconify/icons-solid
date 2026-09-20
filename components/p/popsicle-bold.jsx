import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.z0sij8rai {
  fill: currentColor;
  d: path("M128 4a76.08 76.08 0 0 0-76 76v96a20 20 0 0 0 20 20h24v28a32 32 0 0 0 64 0v-28h24a20 20 0 0 0 20-20V80a76.08 76.08 0 0 0-76-76m8 220a8 8 0 0 1-16 0v-28h16Zm44-52H76V80a52 52 0 0 1 104 0Zm-60-96v68a12 12 0 0 1-24 0V76a12 12 0 0 1 24 0m40 0v68a12 12 0 0 1-24 0V76a12 12 0 0 1 24 0");
}
</style><path class="z0sij8rai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:popsicle-bold"} {...others} />);
}

export default Component;
