import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.ikmse57kr {
  fill: currentColor;
  d: path("M56 2L18.8 42.909L8 34.729H2L18.8 62L62 2z");
}
</style><path class="ikmse57kr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:heavy-check-mark"} {...others} />);
}

export default Component;
