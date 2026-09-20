import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.vu96f-iwa {
  fill: currentColor;
  d: path("M214 48v48a6 6 0 0 1-12 0V62.48l-53.76 53.76a6 6 0 0 1-8.48-8.48L193.52 54H160a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6m-106.24 91.76L54 193.52V160a6 6 0 0 0-12 0v48a6 6 0 0 0 6 6h48a6 6 0 0 0 0-12H62.48l53.76-53.76a6 6 0 0 0-8.48-8.48");
}
</style><path class="vu96f-iwa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrows-out-simple-light"} {...others} />);
}

export default Component;
