import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.avuxquz_c {
  fill: currentColor;
  d: path("M4 17.27v-1h10v1zm0-4.77v-1h16v1zm0-4.77v-1h16v1z");
}
</style><path class="avuxquz_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:notes"} {...others} />);
}

export default Component;
