import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.r9scpwboa {
  fill: var(--svg-color--d0d0d0, #d0d0d0);
  d: path("M2 2h60v60H2z");
}
</style><path class="r9scpwboa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:white-large-square"} {...others} />);
}

export default Component;
