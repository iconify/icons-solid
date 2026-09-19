import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.epebgbx0r {
  cx: 32px;
  cy: 32px;
  r: 31px;
  fill: var(--svg-color--d0d2d3, #d0d2d3);
}
</style><circle class="epebgbx0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-v1:white-circle"} {...others} />);
}

export default Component;
