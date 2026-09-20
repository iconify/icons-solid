import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zay2ahbkc {
  fill: currentColor;
  d: path("M7.5 16.5v-3h-4v-6h1v5h3v-5h1v5h2v1h-2v3zm5 0v-9h8v1h-7v7h6v-3H17v-1h3.5v5z");
}
</style><path class="zay2ahbkc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:4g-mobiledata-sharp"} {...others} />);
}

export default Component;
