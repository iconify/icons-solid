import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d028cbbvj {
  fill: currentColor;
  d: path("M19.23 21V3h1v18zm-9.46-4.692v-2.039h6.884v2.039zm-6-6.577V7.692h12.884v2.039z");
}
</style><path class="d028cbbvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:align-horizontal-right"} {...others} />);
}

export default Component;
