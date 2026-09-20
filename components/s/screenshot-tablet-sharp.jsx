import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eg5bd0bty {
  fill: currentColor;
  d: path("M1 20V4h22v16zm5-2h12V6H6zm7-1h4v-4h-1.5v2.5H13zm-6-6h1.5V8.5H11V7H7z");
}
</style><path class="eg5bd0bty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:screenshot-tablet-sharp"} {...others} />);
}

export default Component;
