import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.luprwpbby {
  fill: currentColor;
  d: path("m18.01 13l-1.42 1.41l1.58 1.58H12v2h6.17l-1.58 1.59l1.42 1.41l3.99-4z");
}

.ztrjkgb_r {
  fill: currentColor;
  d: path("M5 5h2v3h10V5h2v6h2V3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h7v-2H5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1");
}
</style><path class="ztrjkgb_r"/><path class="luprwpbby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-content-paste-go"} {...others} />);
}

export default Component;
