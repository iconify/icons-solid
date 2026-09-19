import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.nkay9-vhx {
  fill: currentColor;
  d: path("m45 2l-9.396 2.48L29.298 2L19 36.354h10.865L20.352 62L43.65 27.648H29.626z");
}
</style><path class="nkay9-vhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:high-voltage"} {...others} />);
}

export default Component;
