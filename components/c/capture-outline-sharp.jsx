import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cbuxcbczx {
  fill: currentColor;
  d: path("M6.192 15.808h11.616V8.192H6.192zM3 19V5h18v14zm1-1h16V6H4zm0 0V6z");
}
</style><path class="cbuxcbczx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:capture-outline-sharp"} {...others} />);
}

export default Component;
