import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jkmee3bvw {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1h3V6H4zm4 0h8V6H8zm9 0h3V6h-3zM8 6v12z");
}
</style><path class="jkmee3bvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:width-wide-outline-sharp"} {...others} />);
}

export default Component;
