import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wgc6n_jgl {
  fill: currentColor;
  d: path("M12 13V4h6v9zm2-2h2V6h-2zm4 7H8L5 8V4h2v4l2.5 8H18zM8 21v-2h10v2zm6-15h2z");
}
</style><path class="wgc6n_jgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:flight-class-outline-sharp"} {...others} />);
}

export default Component;
