import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":118};
const content = `<style>.w4v22vbpd {
  fill: var(--svg-color--2d3441, #2d3441);
  d: path("m56.889 0l117.938 117.421H61.049L0 56.639z");
}

.wioachbxl {
  fill: var(--svg-color--77c1d2, #77c1d2);
  d: path("M199.111 0L256 56.639l-56.889 56.64l-56.889-56.64z");
}
</style><path class="wioachbxl"/><path class="w4v22vbpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:alpinejs-icon"} {...others} />);
}

export default Component;
