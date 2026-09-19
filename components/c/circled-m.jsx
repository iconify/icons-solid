import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.mzdj0rbpk {
  fill: currentColor;
  d: path("M32 2C15.431 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m15 47h-6V24l-9 9l-9-9v25h-6V15h6l9 9l9-9h6z");
}
</style><path class="mzdj0rbpk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:circled-m"} {...others} />);
}

export default Component;
