import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nt0wtvv1n {
  fill: currentColor;
  d: path("m17 14l5-5l-1.41-1.41L18 10.17V3h-2v7.17l-2.59-2.58L12 9z");
}

.swbg75bsk {
  fill: currentColor;
  d: path("M20 17H4V5h8V3H2v16h6v2h8v-2h6v-5h-2z");
}
</style><path class="swbg75bsk"/><path class="nt0wtvv1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-install-desktop"} {...others} />);
}

export default Component;
