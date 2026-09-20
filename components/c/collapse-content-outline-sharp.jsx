import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hpjyso61k {
  fill: currentColor;
  d: path("M11 13v5h-1v-4H6v-1zm3-7v4h4v1h-5V6z");
}
</style><path class="hpjyso61k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:collapse-content-outline-sharp"} {...others} />);
}

export default Component;
