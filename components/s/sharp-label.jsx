import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xnx4-7bft {
  fill: currentColor;
  d: path("M17.03 5L3 5.01v13.98l14.03.01L22 12z");
}
</style><path class="xnx4-7bft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-label"} {...others} />);
}

export default Component;
