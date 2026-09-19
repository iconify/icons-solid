import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.g7_vbg8je {
  fill: var(--svg-color--e03a4d, #e03a4d);
  d: path("M56.28 32L32.14 63L8 32L32.14 1");
}
</style><path class="g7_vbg8je"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-v1:diamond-suit"} {...others} />);
}

export default Component;
