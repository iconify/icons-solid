import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pvtv_2xos {
  fill: currentColor;
  d: path("m20.475 22l-1.3-1.3H2v-5h12.175l-1.5-1.5H5V6.5L.7 2.2L2.1.8l19.8 19.775zM19 .7v13.5h-.7l-3.625-3.65q.575-.2.95-.712T16 8.675q0-.825-.587-1.4T14 6.7q-.65 0-1.162.375t-.713.95L4.825.7zM8 12.75h.575q.5 0 .925-.262t.75-.738L8 9.5z");
}
</style><path class="pvtv_2xos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:smart-card-reader-off-sharp"} {...others} />);
}

export default Component;
