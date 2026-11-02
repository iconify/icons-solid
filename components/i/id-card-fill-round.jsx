import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.volfzd5cy {
  fill: currentColor;
  d: path("M2 9a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v6a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 20H7a5 5 0 0 1-5-5Zm3.236-.168a3 3 0 1 0 5.527 2.335a3 3 0 0 0-5.527-2.335M18 10h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2M5 17h6a1 1 0 0 0 1-1c0-.257-.075-.506-.209-.725C11.124 14.188 9.099 14 8 14c-1.138 0-3.509.209-3.94 1.601c.103.505.334.973.671 1.362A1 1 0 0 0 5 17m10-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2Z");
}
</style><path class="volfzd5cy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:id-card-fill-round"} {...others} />);
}

export default Component;
