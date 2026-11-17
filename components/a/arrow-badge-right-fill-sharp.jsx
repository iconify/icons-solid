import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.alsx4nw9m {
  fill: currentColor;
  d: path("M4 20a1.002 1.002 0 0 1-.707-1.707L9.586 12L3.293 5.707A1 1 0 0 1 4 4h9c.265 0 .52.105.707.293l7 7a1 1 0 0 1 0 1.414l-7 7A1 1 0 0 1 13 20Z");
}
</style><path class="alsx4nw9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-badge-right-fill-sharp"} {...others} />);
}

export default Component;
