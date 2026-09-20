import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kiizlu3sg {
  fill: currentColor;
  d: path("M2 10V2h5q.825 0 1.413.588T9 4v1.35q0 .6-.35 1.088T7.8 7.2L9 10H7L5.85 7.35H4V10zm2-4.65h3V4H4z");
}
</style><path class="kiizlu3sg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:r-mobiledata-outline"} {...others} />);
}

export default Component;
