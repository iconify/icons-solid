import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gkgimf6ed {
  fill: currentColor;
  d: path("M4 8h16V6H4zM2 6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v6H4v6h4.1v2H4q-.825 0-1.412-.587T2 18zm12.95 16l-4.25-4.25l1.4-1.4l2.85 2.8l5.65-5.65l1.4 1.45zM4 6v12v-4.5v2.825z");
}
</style><path class="gkgimf6ed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:credit-score-outline"} {...others} />);
}

export default Component;
