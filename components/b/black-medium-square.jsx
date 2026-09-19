import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.rf31_lbll {
  fill: currentColor;
  d: path("M7 8h48v48H7z");
}
</style><path class="rf31_lbll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:black-medium-square"} {...others} />);
}

export default Component;
