import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a2jumlqhq {
  fill: currentColor;
  d: path("M12.923 16.5h6v-5h-2.115v1h1.115v3h-4v-7h5v-1h-6zm-4.423 0h1v-3h2v-1h-2v-5h-1v5h-3v-5h-1v6h4zM2 20V4h20v16zm1-1h18V5H3zm0 0V5z");
}
</style><path class="a2jumlqhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:4g-mobiledata-badge-outline-sharp"} {...others} />);
}

export default Component;
