import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.q600ioy0k {
  fill: currentColor;
  d: path("M134 24v208a6 6 0 0 1-12 0V24a6 6 0 0 1 12 0");
}
</style><path class="q600ioy0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:line-vertical-light"} {...others} />);
}

export default Component;
