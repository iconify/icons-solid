import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zll3f_1ab {
  fill: currentColor;
  d: path("m10.575 17.575l-4.15-4.15q-.3-.3-.45-.675t-.15-.75t.15-.75t.45-.675l4.15-4.15q.3-.3.675-.45t.75-.15t.75.15t.675.45l4.15 4.15q.3.3.45.675t.15.75t-.15.75t-.45.675l-4.15 4.15q-.3.3-.675.45t-.75.15t-.75-.15t-.675-.45M12 16.15L16.15 12L12 7.85L7.85 12zM12 12");
}
</style><path class="zll3f_1ab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stat-0-outline-rounded"} {...others} />);
}

export default Component;
