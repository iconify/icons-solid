import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ybi9iwwhu {
  fill: currentColor;
  d: path("M5.035 2.737a1.002 1.002 0 0 1 1.884-.131L9.659 9h4.682l2.74-6.394a1 1 0 0 1 1.884.131l3 11a1 1 0 0 1-.351 1.052l-9 7a1 1 0 0 1-1.228 0l-9-7a1 1 0 0 1-.351-1.052Z");
}
</style><path class="ybi9iwwhu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:gitlab-fill-sharp"} {...others} />);
}

export default Component;
