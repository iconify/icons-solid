import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q5_gnccui {
  fill: currentColor;
  d: path("M21.99 6.86L12 1L2 6.86V20h20zM12 13L3.74 7.84L12 3l8.26 4.84z");
}
</style><path class="q5_gnccui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-drafts"} {...others} />);
}

export default Component;
