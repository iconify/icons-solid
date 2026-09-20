import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q6039yb4g {
  fill: currentColor;
  d: path("M2 20V4h14l6 8l-6 8zm2-2h11l4.5-6L15 6H4zm7.75-6");
}
</style><path class="q6039yb4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:label-outline-sharp"} {...others} />);
}

export default Component;
