import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.n19rjccuv {
  fill: var(--svg-color--333, #333);
  d: path("M2 2h60v60H2z");
}

.wy3cybejb {
  fill: var(--svg-color--d0d0d0, #d0d0d0);
  d: path("M10 10h44v44H10z");
}
</style><path class="n19rjccuv"/><path class="wy3cybejb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:black-square-button"} {...others} />);
}

export default Component;
