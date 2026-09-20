import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gdlap8b_w {
  fill: currentColor;
  d: path("M3.616 14.692v-1.384H4.5v.5h2.616v-1.423h-3.5V9.308H8v1.384h-.885v-.5H4.5v1.424H8v3.076zm8.519 1.5v-1.5h-1.75V9.308h4.384v5.384h-1.75v1.5zm-.866-2.384h2.616v-3.616h-2.616zm5.885.884V9.308h.884v4.5h2.346v.884z");
}
</style><path class="gdlap8b_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:sql-sharp"} {...others} />);
}

export default Component;
