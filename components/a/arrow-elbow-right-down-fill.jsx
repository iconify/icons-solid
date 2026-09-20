import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.vyh1_ro9k {
  fill: currentColor;
  d: path("m229.66 165.66l-48 48a8 8 0 0 1-11.32 0l-48-48A8 8 0 0 1 128 152h40V72H32a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8v88h40a8 8 0 0 1 5.66 13.66");
}
</style><path class="vyh1_ro9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-elbow-right-down-fill"} {...others} />);
}

export default Component;
