import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.jd_8jwb_g {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("M106 112.5v-97L22 64z");
}
</style><path class="jd_8jwb_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:reverse-button"} {...others} />);
}

export default Component;
