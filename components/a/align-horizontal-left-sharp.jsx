import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.met22ebbu {
  fill: currentColor;
  d: path("M3.77 21V3h1v18zm3.576-4.692v-2.039h6.885v2.039zm0-6.577V7.692h12.885v2.039z");
}
</style><path class="met22ebbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:align-horizontal-left-sharp"} {...others} />);
}

export default Component;
