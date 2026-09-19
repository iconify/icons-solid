import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.hsy33abeo {
  fill: var(--svg-color--405866, #405866);
  d: path("M58.18 25.98H38.03V5.83c0-7.77-12.05-7.77-12.05 0v20.15H5.83c-7.768 0-7.768 12.05 0 12.05h20.15v20.15c0 7.77 12.05 7.77 12.05 0V38.03h20.15c7.769 0 7.769-12.05 0-12.05");
}
</style><path class="hsy33abeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-v1:heavy-plus-sign"} {...others} />);
}

export default Component;
