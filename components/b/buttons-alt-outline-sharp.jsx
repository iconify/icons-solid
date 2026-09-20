import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g9n36sb7t {
  fill: currentColor;
  d: path("M2 18V6h20v12zm2-2h16V8H4zm3.25-1h1.5v-2.25H11v-1.5H8.75V9h-1.5v2.25H5v1.5h2.25zM4 16V8z");
}
</style><path class="g9n36sb7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:buttons-alt-outline-sharp"} {...others} />);
}

export default Component;
