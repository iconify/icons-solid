import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.evy9s1f1x {
  fill: var(--svg-color--354a54, #354a54);
  d: path("M53.799 49.21a4.7 4.7 0 0 1-4.701 4.702h-34.2A4.7 4.7 0 0 1 10.2 49.21v-34.2a4.7 4.7 0 0 1 4.698-4.701h34.2a4.7 4.7 0 0 1 4.701 4.701z");
}
</style><path class="evy9s1f1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-v1:black-medium-square"} {...others} />);
}

export default Component;
