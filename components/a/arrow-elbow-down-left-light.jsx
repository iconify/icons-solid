import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.v-etp3b8h {
  fill: currentColor;
  d: path("M198 32v144a6 6 0 0 1-6 6H62.49l37.75 37.76a6 6 0 1 1-8.48 8.48l-48-48a6 6 0 0 1 0-8.48l48-48a6 6 0 1 1 8.48 8.48L62.49 170H186V32a6 6 0 0 1 12 0");
}
</style><path class="v-etp3b8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-elbow-down-left-light"} {...others} />);
}

export default Component;
