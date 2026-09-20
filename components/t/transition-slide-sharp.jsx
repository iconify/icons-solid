import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kx-4-jprb {
  fill: currentColor;
  d: path("M2 19V5h5.039v14zm7.423 0V5H22v14z");
}
</style><path class="kx-4-jprb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:transition-slide-sharp"} {...others} />);
}

export default Component;
