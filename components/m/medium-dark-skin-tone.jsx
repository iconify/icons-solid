import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.cytjfwb1u {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--b47d56, #b47d56);
}
</style><circle class="cytjfwb1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:medium-dark-skin-tone"} {...others} />);
}

export default Component;
