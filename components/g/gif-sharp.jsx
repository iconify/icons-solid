import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uc9ysrlav {
  fill: currentColor;
  d: path("M11.5 15V9H13v6zM5 15V9h5v1.5H6.5v3h2V12H10v3zm9.5 0V9H19v1.5h-3v1h2V13h-2v2z");
}
</style><path class="uc9ysrlav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:gif-sharp"} {...others} />);
}

export default Component;
