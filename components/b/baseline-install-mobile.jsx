import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.feui3y4kq {
  fill: currentColor;
  d: path("M17 18H7V6h7V1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-5h-2z");
}

.he_sxxb4l {
  fill: currentColor;
  d: path("m18 14l5-5l-1.41-1.41L19 10.17V3h-2v7.17l-2.59-2.58L13 9z");
}
</style><path class="feui3y4kq"/><path class="he_sxxb4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-install-mobile"} {...others} />);
}

export default Component;
