import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.xqa70t7kg {
  fill: currentColor;
  d: path("M248 104a8 8 0 0 1-5.37 7.56L64 173.69V216a8 8 0 0 1-16 0V40a8 8 0 0 1 10.63-7.56l184 64A8 8 0 0 1 248 104");
}
</style><path class="xqa70t7kg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:flag-pennant-fill"} {...others} />);
}

export default Component;
