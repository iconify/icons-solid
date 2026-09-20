import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.khmvehqtq {
  fill: currentColor;
  d: path("M14.556 11.077q-.225-.573-.65-.993q-.423-.42-.996-.624V3.05q3.223.313 5.488 2.555t2.577 5.472zM11.14 20.95q-3.466-.356-5.791-2.908t-2.325-6.044T5.35 5.936t5.79-2.886v6.401q-.823.293-1.315.998t-.492 1.555t.502 1.526t1.305.969zm1.769 0v-6.454q.586-.203 1.004-.62q.417-.418.642-.991h6.419q-.315 3.221-2.58 5.486q-2.264 2.264-5.485 2.579");
}
</style><path class="khmvehqtq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:donut-small"} {...others} />);
}

export default Component;
