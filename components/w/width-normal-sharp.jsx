import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xi8enmbzu {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-2h4V6H4zm12 0h4V6h-4z");
}
</style><path class="xi8enmbzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:width-normal-sharp"} {...others} />);
}

export default Component;
