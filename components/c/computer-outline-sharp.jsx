import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bxp8icnmc {
  fill: currentColor;
  d: path("M1 21v-2h22v2zm1-3V3h20v15zm2-2h16V5H4zm0 0V5z");
}
</style><path class="bxp8icnmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:computer-outline-sharp"} {...others} />);
}

export default Component;
