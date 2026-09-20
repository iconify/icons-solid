import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zq--glbpw {
  fill: currentColor;
  d: path("m13.385 10.116l2-1.193l2 1.193V4h-4zM3 20.077V3h18v14H6.077z");
}
</style><path class="zq--glbpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:comment-bank-sharp"} {...others} />);
}

export default Component;
