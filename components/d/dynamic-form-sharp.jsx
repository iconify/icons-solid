import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e_cakcqie {
  fill: currentColor;
  d: path("M2.5 11V4.5H13V11zm0 8.5V13H15v6.5zm14.5 0V11h-2V4.5h6.27l-2 5.116h1.96zM5 17h1.5v-1.5H5zm0-8.5h1.5V7H5z");
}
</style><path class="e_cakcqie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:dynamic-form-sharp"} {...others} />);
}

export default Component;
