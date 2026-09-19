import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.jaca2pbta {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--d6a57c, #d6a57c);
}
</style><circle class="jaca2pbta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:medium-skin-tone"} {...others} />);
}

export default Component;
