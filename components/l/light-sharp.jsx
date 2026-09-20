import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hw-blabjk {
  fill: currentColor;
  d: path("M12 19.077q-1.285 0-2.18-.896T8.922 16H4.09q-.04-.2-.065-.456Q4 15.287 4 15q.011-3.134 2.171-5.47T11.5 7.012V4.385h1v2.627q3.17.182 5.329 2.518Q19.989 11.866 20 15q0 .288-.025.544T19.91 16h-4.833q0 1.285-.896 2.18T12 19.078M5 15h14q0-2.9-2.05-4.95T12 8t-4.95 2.05T5 15");
}
</style><path class="hw-blabjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:light-sharp"} {...others} />);
}

export default Component;
