import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.cbs_dha_p {
  fill: currentColor;
  d: path("M2 2h60v60H2z");
}
</style><path class="cbs_dha_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:black-large-square"} {...others} />);
}

export default Component;
