import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.dw34xcs_l {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32c-.001 16.568 13.432 30 30 30s30.001-13.432 30-30c.001-16.568-13.432-30-30-30M9 38V26h46v12z");
}
</style><path class="dw34xcs_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:no-entry"} {...others} />);
}

export default Component;
