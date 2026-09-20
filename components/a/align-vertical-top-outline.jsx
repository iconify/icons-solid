import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xwhdhqugn {
  fill: currentColor;
  d: path("M7 22V6h3v16zm7-6V6h3v10zM2 4V2h20v2z");
}
</style><path class="xwhdhqugn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:align-vertical-top-outline"} {...others} />);
}

export default Component;
