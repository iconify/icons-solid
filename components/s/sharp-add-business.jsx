import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lxe7e-j4d {
  fill: currentColor;
  d: path("M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z");
}

.yybnh_bla {
  fill: currentColor;
  d: path("M15 17h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4zm-6 1H4v-4h5zM2 4h15v2H2z");
}
</style><path class="yybnh_bla"/><path class="lxe7e-j4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-add-business"} {...others} />);
}

export default Component;
