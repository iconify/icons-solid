import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ap-29ub_u {
  fill: currentColor;
  d: path("m205.66 181.66l-48 48a8 8 0 0 1-11.32 0l-48-48A8 8 0 0 1 104 168h40v-40a88.1 88.1 0 0 0-88-88a8 8 0 0 1 0-16a104.11 104.11 0 0 1 104 104v40h40a8 8 0 0 1 5.66 13.66");
}
</style><path class="ap-29ub_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-bend-right-down-fill"} {...others} />);
}

export default Component;
