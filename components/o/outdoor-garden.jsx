import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ij9f0_xdj {
  fill: currentColor;
  d: path("M3.73 20.5h5V6.135l-2.5-2.5l-2.5 2.5zm5.77 0h5V6.135l-2.5-2.5l-2.5 2.5zm5.77 0h5V6.135l-2.5-2.5l-2.5 2.5z");
}
</style><path class="ij9f0_xdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:outdoor-garden"} {...others} />);
}

export default Component;
