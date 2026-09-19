import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wtidhiwom {
  fill: currentColor;
  d: path("M15 9.86L18.03 12L15 14.14zm-9 0L9.03 12L6 14.14zM13 6v12l8.5-6zM4 6v12l8.5-6z");
}
</style><path class="wtidhiwom"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-fast-forward"} {...others} />);
}

export default Component;
