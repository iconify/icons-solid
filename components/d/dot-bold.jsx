import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.nf6qerb1f {
  fill: currentColor;
  d: path("M144 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16");
}
</style><path class="nf6qerb1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:dot-bold"} {...others} />);
}

export default Component;
