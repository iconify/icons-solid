import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.zcg9v38ld {
  fill: currentColor;
  d: path("M200 74a54 54 0 0 0-33.89 96H89.89A54 54 0 1 0 56 182h144a54 54 0 0 0 0-108M14 128a42 42 0 1 1 42 42a42 42 0 0 1-42-42m186 42a42 42 0 1 1 42-42a42 42 0 0 1-42 42");
}
</style><path class="zcg9v38ld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:voicemail-light"} {...others} />);
}

export default Component;
