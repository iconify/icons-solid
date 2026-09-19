import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.o0m1bxb5n {
  fill: currentColor;
  d: path("M32 2L2 62h60z");
}
</style><path class="o0m1bxb5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:red-triangle-pointed-up"} {...others} />);
}

export default Component;
