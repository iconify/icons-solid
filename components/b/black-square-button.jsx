import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.poyjmcwjh {
  fill: currentColor;
  d: path("M2 2v60h60V2zm52 52H10V10h44z");
}
</style><path class="poyjmcwjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:black-square-button"} {...others} />);
}

export default Component;
