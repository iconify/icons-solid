import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.prx_zibmv {
  fill: currentColor;
  d: path("M4 15.5h7v-7H4zm9 2H2v-11h11V11h9v2h-9zM7.5 12");
}
</style><path class="prx_zibmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:line-start-square-outline-sharp"} {...others} />);
}

export default Component;
