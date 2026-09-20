import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.ih1i-5b2o {
  fill: currentColor;
  d: path("M15.967 4.158c-.857-1.542-3.075-1.542-3.933 0L3.069 20.285C2.142 21.952 3.347 24 5.254 24h17.493c1.906 0 3.111-2.048 2.185-3.715z");
}
</style><path class="ih1i-5b2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:triangle-28-filled"} {...others} />);
}

export default Component;
