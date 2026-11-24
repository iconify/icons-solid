import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.atf_5wnnd {
  fill: currentColor;
  d: path("M22 7v1H2V7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3M2 10h8v9a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3Zm11 5h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2");
}
</style><path class="atf_5wnnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:credit-card-minus-corner-fill"} {...others} />);
}

export default Component;
