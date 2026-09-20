import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g31ylhb4r {
  fill: currentColor;
  d: path("m8.435 16.204l-3.639-3.639q-.242-.242-.242-.565t.242-.565l3.638-3.639q.243-.242.566-.242t.566.242l3.703 3.704h7.154q.214 0 .357.143t.143.357t-.143.357t-.357.143h-7.154l-3.703 3.704q-.243.242-.566.242t-.565-.242");
}
</style><path class="g31ylhb4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:line-start-diamond-rounded"} {...others} />);
}

export default Component;
