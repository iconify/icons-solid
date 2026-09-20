import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o09hgtbrt {
  fill: currentColor;
  d: path("M11 18q-1.65 0-2.825-1.175T7 14q-2.5.025-4.25-1.737T1 8q0-.825.588-1.412T3 6h4V5H5V3h6v2H9v1h3.175q.4 0 .763.15t.637.425l8.375 8.375Q23 16 23 17.45t-1.05 2.5t-2.5 1.05t-2.5-1.05L15 18zm0-4H8.975q0 .825.588 1.413T11 16h2z");
}
</style><path class="o09hgtbrt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:handheld-controller-sharp"} {...others} />);
}

export default Component;
