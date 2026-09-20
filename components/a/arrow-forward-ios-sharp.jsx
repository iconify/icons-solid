import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nu_r9fbhm {
  fill: currentColor;
  d: path("M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10z");
}
</style><path class="nu_r9fbhm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:arrow-forward-ios-sharp"} {...others} />);
}

export default Component;
