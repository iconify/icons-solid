import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.kwv23tbku {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--8a6859, #8a6859);
}
</style><circle class="kwv23tbku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:dark-skin-tone"} {...others} />);
}

export default Component;
