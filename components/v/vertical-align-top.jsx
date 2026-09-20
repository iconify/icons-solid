import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pg87clb8s {
  fill: currentColor;
  d: path("M5 5V4h14v1zm6.5 15V9.608l-3.1 3.1L7.692 12L12 7.692L16.308 12l-.708.708l-3.1-3.1V20z");
}
</style><path class="pg87clb8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:vertical-align-top"} {...others} />);
}

export default Component;
