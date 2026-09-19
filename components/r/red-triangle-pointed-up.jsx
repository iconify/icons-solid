import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.ep3is9lch {
  fill: var(--svg-color--ed4c5c, #ed4c5c);
  d: path("M32 2L2 62h60z");
}
</style><path class="ep3is9lch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:red-triangle-pointed-up"} {...others} />);
}

export default Component;
