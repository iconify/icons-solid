import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.t7zzz4baa {
  fill: var(--svg-color--e0e0e0, #e0e0e0);
  d: path("M40.03 40.03h47.95v47.95H40.03z");
}
</style><path class="t7zzz4baa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:white-medium-small-square"} {...others} />);
}

export default Component;
