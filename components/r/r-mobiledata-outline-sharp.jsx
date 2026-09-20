import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j96fpbbdt {
  fill: currentColor;
  d: path("M2 10V2h7v5.2H7.8L9 10H7L5.85 7.35H4V10zm2-4.65h3V4H4z");
}
</style><path class="j96fpbbdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:r-mobiledata-outline-sharp"} {...others} />);
}

export default Component;
