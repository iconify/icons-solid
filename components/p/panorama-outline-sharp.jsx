import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kelc__9cw {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1h16V6H4zm3.5-2h9.154l-2.827-3.77l-2.615 3.308l-1.75-2.115zM4 18V6z");
}
</style><path class="kelc__9cw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:panorama-outline-sharp"} {...others} />);
}

export default Component;
