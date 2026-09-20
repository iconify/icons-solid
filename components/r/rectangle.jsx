import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bzeq_uclt {
  fill: currentColor;
  d: path("M2 20V4h20v16z");
}
</style><path class="bzeq_uclt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:rectangle"} {...others} />);
}

export default Component;
