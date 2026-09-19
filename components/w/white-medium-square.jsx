import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.ueq0-m88d {
  fill: currentColor;
  d: path("M54 10v44H10V10zm2-2H8v48h48z");
}
</style><path class="ueq0-m88d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:white-medium-square"} {...others} />);
}

export default Component;
