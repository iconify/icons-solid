import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uq220ihex {
  fill: currentColor;
  d: path("M4 18V6h4.825v12zm5.594 0V6H14.4v12zm5.575 0V6h4.825v12z");
}
</style><path class="uq220ihex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:view-column-sharp"} {...others} />);
}

export default Component;
