import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qo9oq7__u {
  fill: currentColor;
  d: path("M15.158 6.221a2 2 0 1 1 3.684 1.558a2 2 0 0 1-3.684-1.558m-5 5a2 2 0 1 1 3.684 1.558a2 2 0 0 1-3.684-1.558m-5 5a2 2 0 1 1 3.684 1.558a2 2 0 0 1-3.684-1.558");
}
</style><path class="qo9oq7__u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:more-diagonal-fill"} {...others} />);
}

export default Component;
