import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.heymy4irg {
  fill: currentColor;
  d: path("M9 7H7v5H5V7H3v7h4v3h2v-3h2v-2H9zm8 4v2h2v2h-5V9h7c0-1.1-.9-2-2-2h-5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-4z");
}
</style><path class="heymy4irg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-4g-mobiledata"} {...others} />);
}

export default Component;
