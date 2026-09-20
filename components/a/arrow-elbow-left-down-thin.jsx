import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ywuu_kdps {
  fill: currentColor;
  d: path("M236 72a4 4 0 0 1-4 4H92v130.34l41.17-41.17a4 4 0 0 1 5.66 5.66l-48 48a4 4 0 0 1-5.66 0l-48-48a4 4 0 0 1 5.66-5.66L84 206.34V72a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4");
}
</style><path class="ywuu_kdps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-elbow-left-down-thin"} {...others} />);
}

export default Component;
