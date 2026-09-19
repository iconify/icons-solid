import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.x2xu2umfc {
  fill: currentColor;
  d: path("M2 26h60v12H2z");
}
</style><path class="x2xu2umfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:minus-sign"} {...others} />);
}

export default Component;
