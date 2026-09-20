import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.scghyeb3q {
  fill: currentColor;
  d: path("M7 20V4h10v16zm-4-2V6h2v12zm16 0V6h2v12z");
}
</style><path class="scghyeb3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:amp-stories"} {...others} />);
}

export default Component;
