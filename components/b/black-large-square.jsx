import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.n19rjccuv {
  fill: var(--svg-color--333, #333);
  d: path("M2 2h60v60H2z");
}
</style><path class="n19rjccuv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:black-large-square"} {...others} />);
}

export default Component;
