import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.mvil45bfh {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10 7.002L5.963 14h8.074zm.866-2.5a1 1 0 0 0-1.732 0L3.365 14.5a1 1 0 0 0 .866 1.5H15.77a1 1 0 0 0 .866-1.5z");
}
</style><path clip-rule="evenodd" class="mvil45bfh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:triangle-up"} {...others} />);
}

export default Component;
