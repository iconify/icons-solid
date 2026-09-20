import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.eg-qwiuph {
  d: path("M256 0v256H0V0zm-26.182 26.182H26.182v203.636h203.636z");
}
</style><path class="eg-qwiuph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:codesandbox-icon"} {...others} />);
}

export default Component;
