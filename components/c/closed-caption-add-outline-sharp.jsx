import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hwo49eboy {
  fill: currentColor;
  d: path("M15.116 19H4V5h16v9.116h-1V6H5v12h10.116zM19 21v-2h-2v-1h2v-2h1v2h2v1h-2v2zM6.692 14.692h4.385v-1.461h-.885v.577H7.577v-3.616h2.615v.616h.885v-1.5H6.692zm6.231 0h4.385v-1.461h-.885v.577h-2.615v-3.616h2.615v.616h.885v-1.5h-4.385z");
}
</style><path class="hwo49eboy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:closed-caption-add-outline-sharp"} {...others} />);
}

export default Component;
