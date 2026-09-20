import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nh4sj0gje {
  fill: currentColor;
  d: path("M4 20V4h16v16zM5 5v14h14V5h-2.5v6.116l-2-1.193l-2 1.193V5zm0 14V5z");
}
</style><path class="nh4sj0gje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:developer-guide-outline-sharp"} {...others} />);
}

export default Component;
