import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xckjz4b9z {
  fill: currentColor;
  d: path("M9.594 11.616V6H20v5.616zM15.175 18v-5.615H20V18zm-5.58 0v-5.615h4.81V18zM4 18V6h4.825v12z");
}
</style><path class="xckjz4b9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:view-quilt-sharp"} {...others} />);
}

export default Component;
