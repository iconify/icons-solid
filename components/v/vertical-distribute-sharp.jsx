import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bk5g6cc_t {
  fill: currentColor;
  d: path("M2 22v-2h20v2zm5-8.5v-3h10v3zM2 4V2h20v2z");
}
</style><path class="bk5g6cc_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:vertical-distribute-sharp"} {...others} />);
}

export default Component;
