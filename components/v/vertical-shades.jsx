import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ix06gebmg {
  fill: currentColor;
  d: path("M2 21v-2h2V3h16v16h2v2zm8-2h4V5h-4z");
}
</style><path class="ix06gebmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:vertical-shades"} {...others} />);
}

export default Component;
