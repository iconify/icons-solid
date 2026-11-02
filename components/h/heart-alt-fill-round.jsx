import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z0gd1lu9k {
  fill: currentColor;
  d: path("m12 5.586l.293-.293a5.243 5.243 0 0 1 7.414 7.414l-4 4a5.243 5.243 0 0 1-7.414 0l-4-4a5.243 5.243 0 0 1 7.414-7.414Z");
}
</style><path class="z0gd1lu9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:heart-alt-fill-round"} {...others} />);
}

export default Component;
