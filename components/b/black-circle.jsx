import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.lzpq-ccsc {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: currentColor;
}
</style><circle class="lzpq-ccsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:black-circle"} {...others} />);
}

export default Component;
