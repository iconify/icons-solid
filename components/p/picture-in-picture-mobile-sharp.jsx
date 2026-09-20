import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vdp6gwbtk {
  fill: currentColor;
  d: path("M20 22H4V2h16zm-3-9V5h-6v8z");
}
</style><path class="vdp6gwbtk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:picture-in-picture-mobile-sharp"} {...others} />);
}

export default Component;
