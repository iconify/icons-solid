import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ukf8gbpkc {
  fill: currentColor;
  d: path("M4.95 20L.5 12L5 4h4l-4.5 8l2.6 4.65L14.9 4H19l4.5 8l-4.5 8h-4l4.5-8l-2.6-4.6L9.15 20z");
}
</style><path class="ukf8gbpkc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:polymer"} {...others} />);
}

export default Component;
