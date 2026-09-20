import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rhf7l7mgl {
  fill: currentColor;
  d: path("M8 8v8zM6 18V6h12v12zm2-2h8V8H8z");
}
</style><path class="rhf7l7mgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stop-outline"} {...others} />);
}

export default Component;
