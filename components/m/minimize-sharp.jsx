import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qt2fe3thc {
  fill: currentColor;
  d: path("M6.5 20v-1h11v1z");
}
</style><path class="qt2fe3thc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:minimize-sharp"} {...others} />);
}

export default Component;
