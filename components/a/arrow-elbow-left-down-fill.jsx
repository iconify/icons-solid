import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.bp2kzmbou {
  fill: currentColor;
  d: path("M240 72a8 8 0 0 1-8 8H96v80h40a8 8 0 0 1 5.66 13.66l-48 48a8 8 0 0 1-11.32 0l-48-48A8 8 0 0 1 40 160h40V72a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8");
}
</style><path class="bp2kzmbou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-elbow-left-down-fill"} {...others} />);
}

export default Component;
