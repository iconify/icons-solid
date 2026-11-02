import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.na57upbcn {
  fill: currentColor;
  d: path("M15.118 8H18a1 1 0 0 1 0 2h-3.882l-2 4H18a1 1 0 0 1 0 2h-6.882l-1.224 2.447a1 1 0 1 1-1.788-.894L8.882 16H6a1 1 0 0 1 0-2h3.882l2-4H6a1 1 0 0 1 0-2h6.882l1.224-2.447a1 1 0 1 1 1.788.894Z");
}
</style><path class="na57upbcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:equal-not-fill"} {...others} />);
}

export default Component;
