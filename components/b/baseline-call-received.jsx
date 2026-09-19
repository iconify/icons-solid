import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rsua6gmxm {
  fill: currentColor;
  d: path("M20 5.41L18.59 4L7 15.59V9H5v10h10v-2H8.41z");
}
</style><path class="rsua6gmxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-call-received"} {...others} />);
}

export default Component;
