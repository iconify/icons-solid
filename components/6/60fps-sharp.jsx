import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l5_hg7kll {
  fill: currentColor;
  d: path("M2 19V5h8v3H5v2h6v9zm3-3h3v-3H5zm10 0h4V8h-4zm-3 3V5h10v14z");
}
</style><path class="l5_hg7kll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:60fps-sharp"} {...others} />);
}

export default Component;
