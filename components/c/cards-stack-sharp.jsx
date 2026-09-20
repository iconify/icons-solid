import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qkzcl4u6u {
  fill: currentColor;
  d: path("M10.308 8.5h7v-1h-7zm0 3.154h4v-1h-4zm-6.044 8.5L2.73 9.119l1.5-.167v8.606h14.775l.057.715zm2.351-4.958V4H21v11.196z");
}
</style><path class="qkzcl4u6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:cards-stack-sharp"} {...others} />);
}

export default Component;
