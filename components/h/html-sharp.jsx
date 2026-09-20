import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q-tyoq94s {
  fill: currentColor;
  d: path("M.154 14.692V9.308h.885v2h2.615v-2h.885v5.384h-.885v-2.5H1.039v2.5zm7.75 0v-4.5H5.96v-.884h4.77v.884H8.789v4.5zm4.25 0V9.308h5.885v5.384h-.885v-4.5h-1.616v3.5h-.884v-3.5h-1.616v4.5zm8.077 0V9.308h.884v4.5h2.731v.884z");
}
</style><path class="q-tyoq94s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:html-sharp"} {...others} />);
}

export default Component;
