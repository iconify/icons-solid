import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuhbyg6-n {
  fill: currentColor;
  d: path("M3.55 12.885L8 8.423V4h8v4.423l4.462 4.462zM3 19v-5.115h18V19zm7-2.608h4v-.884h-4z");
}
</style><path class="cuhbyg6-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:range-hood-sharp"} {...others} />);
}

export default Component;
