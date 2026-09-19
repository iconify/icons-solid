import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.he_sxxb4l {
  fill: currentColor;
  d: path("m18 14l5-5l-1.41-1.41L19 10.17V3h-2v7.17l-2.59-2.58L13 9z");
}

.hk4_z6fiq {
  fill: currentColor;
  d: path("M17 18H7V6h7V1H5v22h14v-7h-2z");
}
</style><path class="hk4_z6fiq"/><path class="he_sxxb4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-install-mobile"} {...others} />);
}

export default Component;
