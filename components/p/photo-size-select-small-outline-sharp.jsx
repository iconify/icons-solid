import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.scomcabpt {
  fill: currentColor;
  d: path("M3 21V11h10v10zm12 0v-2h2v2zM4 19h8l-2.6-3.5L7.5 18l-1.4-1.85zm15-2v-2h2v2zm0-4v-2h2v2zM3 9V7h2v2zm16 0V7h2v2zM7 5V3h2v2zm4 0V3h2v2zm4 0V3h2v2zM3 5V3h2v2zm18 0h-2V3h2zm-2 16v-2h2v2z");
}
</style><path class="scomcabpt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:photo-size-select-small-outline-sharp"} {...others} />);
}

export default Component;
