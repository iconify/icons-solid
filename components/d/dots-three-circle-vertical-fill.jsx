import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.x_9q9-qet {
  fill: currentColor;
  d: path("M232 128a104 104 0 1 0-104 104a104.13 104.13 0 0 0 104-104M116 84a12 12 0 1 1 12 12a12 12 0 0 1-12-12m0 44a12 12 0 1 1 12 12a12 12 0 0 1-12-12m0 44a12 12 0 1 1 12 12a12 12 0 0 1-12-12");
}
</style><path class="x_9q9-qet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:dots-three-circle-vertical-fill"} {...others} />);
}

export default Component;
