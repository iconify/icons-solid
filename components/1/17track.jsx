import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fqct5pbki {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m40.602 24.617l-6.735 12.516h6.735ZM8.219 14.443l6.566-3.576m0 0v26.266m11.541 0l14.133-26.266H23.058");
}
</style><path class="fqct5pbki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:17track"} {...others} />);
}

export default Component;
