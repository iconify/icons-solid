import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.mnjm7f6oc {
  fill: var(--svg-color--428bc1, #428bc1);
  d: path("M32 2C15.4 2 2 15.4 2 32h60C62 15.4 48.6 2 32 2");
}

.njnmk37ll {
  fill: var(--svg-color--ffe62e, #ffe62e);
  d: path("M32 62c16.6 0 30-13.4 30-30H2c0 16.6 13.4 30 30 30");
}
</style><path class="njnmk37ll"/><path class="mnjm7f6oc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:flag-for-flag-ukraine"} {...others} />);
}

export default Component;
