import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fjo_zg3yw {
  fill: currentColor;
  d: path("M4 20V4h16v16Z");
}
</style><path class="fjo_zg3yw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:chrome-maximize-sharp"} {...others} />);
}

export default Component;
