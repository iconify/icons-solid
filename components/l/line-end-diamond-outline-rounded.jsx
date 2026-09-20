import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pudabdk3b {
  fill: currentColor;
  d: path("M15 15.348L18.348 12L15 8.652L11.652 12zm-.565.856L10.73 12.5H3.577q-.213 0-.357-.143T3.077 12t.143-.357t.357-.143h7.154l3.704-3.704q.242-.242.565-.242t.566.242l3.638 3.638q.242.243.242.566t-.242.566l-3.639 3.638q-.242.242-.565.242t-.565-.242M15 12");
}
</style><path class="pudabdk3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:line-end-diamond-outline-rounded"} {...others} />);
}

export default Component;
