import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ho_tg7biz {
  fill: currentColor;
  d: path("M4 20v-4.038h1V19h14V7.154H5v3.038H4V4h16v16zm7.116-3.134l-.689-.689l2.556-2.6H4v-1h8.983l-2.556-2.6l.689-.688l3.788 3.788z");
}
</style><path class="ho_tg7biz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:tab-move-sharp"} {...others} />);
}

export default Component;
