import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qw8lvvxuc {
  fill: currentColor;
  d: path("M8 11v2h4.15l-1.55 1.6L12 16l4-4l-4-4l-1.4 1.4l1.55 1.6zM5 23V1h14v5.1h1v4.8h-1V23zm2-2h10V3H7zm0 0V3z");
}
</style><path class="qw8lvvxuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mobile-arrow-right-outline-sharp"} {...others} />);
}

export default Component;
