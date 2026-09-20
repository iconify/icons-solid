import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dl36g5gpl {
  fill: currentColor;
  d: path("M11.808 14.692V9.308h.884v5.384zm-6.27 0V9.308h4.385v.884h-3.5v3.616h2.616v-1.654h.884v2.538zm9.039 0V9.308h3.885v.884h-3v1.462h2v.885h-2v2.153z");
}
</style><path class="dl36g5gpl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:gif-sharp"} {...others} />);
}

export default Component;
