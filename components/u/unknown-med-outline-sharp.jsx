import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ttpw3gb6h {
  fill: currentColor;
  d: path("M2 13v-3h9v3zm11 0v-3h9v3z");
}
</style><path class="ttpw3gb6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:unknown-med-outline-sharp"} {...others} />);
}

export default Component;
