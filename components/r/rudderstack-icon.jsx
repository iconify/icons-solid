import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":258};
const content = `<style>.rg155fb3o {
  d: path("M256 0H0c0 136.177 106.017 248.816 241.945 257.057l14.055.852z");
}
</style><path class="rg155fb3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:rudderstack-icon"} {...others} />);
}

export default Component;
