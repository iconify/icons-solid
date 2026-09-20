import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y9mw98ilc {
  fill: currentColor;
  d: path("M2 22L22 2v20zm15-2h3V6.85l-3 3z");
}
</style><path class="y9mw98ilc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:network-cell-outline-sharp"} {...others} />);
}

export default Component;
