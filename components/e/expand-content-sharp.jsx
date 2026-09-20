import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e7q4fxgdu {
  fill: currentColor;
  d: path("M6 18v-5h1v4h4v1zm11-7V7h-4V6h5v5z");
}
</style><path class="e7q4fxgdu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:expand-content-sharp"} {...others} />);
}

export default Component;
