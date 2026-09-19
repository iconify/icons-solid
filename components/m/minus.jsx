import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.zjkn9acpk {
  fill: var(--svg-color--405866, #405866);
  d: path("M58.05 26.705H5.82c-7.75 0-7.75 12.02 0 12.02h52.23c7.752 0 7.752-12.02 0-12.02");
}
</style><path class="zjkn9acpk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-v1:minus"} {...others} />);
}

export default Component;
