import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rfqgtltdl {
  fill: currentColor;
  d: path("m7 18l-1.4-1.4l4.6-4.6l-4.6-4.6L7 6l6 6zm9 0V6h2v12z");
}
</style><path class="rfqgtltdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:last-page"} {...others} />);
}

export default Component;
