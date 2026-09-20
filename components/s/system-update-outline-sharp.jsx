import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ysuk6j_eh {
  fill: currentColor;
  d: path("m12 16l4-4l-1.4-1.4l-1.6 1.55V8h-2v4.15L9.4 10.6L8 12zm-7 7V1h14v5.1h1v4.8h-1V23zm2-2h10V3H7zm0 0V3z");
}
</style><path class="ysuk6j_eh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:system-update-outline-sharp"} {...others} />);
}

export default Component;
