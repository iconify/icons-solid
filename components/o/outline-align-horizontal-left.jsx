import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yf3_r800o {
  fill: currentColor;
  d: path("M4 22H2V2h2zM22 7H6v3h16zm-6 7H6v3h10z");
}
</style><path class="yf3_r800o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-align-horizontal-left"} {...others} />);
}

export default Component;
