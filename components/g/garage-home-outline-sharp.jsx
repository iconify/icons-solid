import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pobu7wbzw {
  fill: currentColor;
  d: path("M4 21V9l8-6l8 6v12h-2V10l-6-4.5L6 10v11zm5-2h6v-2H9zm0-4h6v-2H9zm-2 6V11h10v10z");
}
</style><path class="pobu7wbzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:garage-home-outline-sharp"} {...others} />);
}

export default Component;
