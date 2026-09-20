import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ns2gsxwyc {
  fill: currentColor;
  d: path("M11.596 15.173V8.827L8.404 12zM5 19h10V5H5zm-1 1V4h16v16z");
}
</style><path class="ns2gsxwyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:right-panel-open-sharp"} {...others} />);
}

export default Component;
