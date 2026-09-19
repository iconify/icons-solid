import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cooa6dyoq {
  fill: currentColor;
  d: path("m21 12l-4-4v3H9v2h8v3z");
}

.f-r383bvg {
  fill: currentColor;
  d: path("M5 5h7V3H3v18h9v-2H5z");
}
</style><path class="f-r383bvg"/><path class="cooa6dyoq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-logout"} {...others} />);
}

export default Component;
