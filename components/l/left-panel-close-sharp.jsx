import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x8g0jsbgp {
  fill: currentColor;
  d: path("M15.596 15.173V8.827L12.404 12zM9 19h10V5H9zm-5 1V4h16v16z");
}
</style><path class="x8g0jsbgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:left-panel-close-sharp"} {...others} />);
}

export default Component;
