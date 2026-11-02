import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hgpkd0ixs {
  fill: currentColor;
  d: path("M22 8H2V7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3Zm0 2v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-7Zm-11 4H7a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2");
}
</style><path class="hgpkd0ixs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:credit-card-fill"} {...others} />);
}

export default Component;
