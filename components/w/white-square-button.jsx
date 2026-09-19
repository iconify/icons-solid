import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.r9scpwboa {
  fill: var(--svg-color--d0d0d0, #d0d0d0);
  d: path("M2 2h60v60H2z");
}

.z7x0mu8oe {
  fill: var(--svg-color--333, #333);
  d: path("M10 10h44v44H10z");
}
</style><path class="r9scpwboa"/><path class="z7x0mu8oe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:white-square-button"} {...others} />);
}

export default Component;
