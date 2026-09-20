import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.l1_8d-czw {
  fill: var(--svg-color--ffdc5d, #FFDC5D);
  d: path("M34.896 36C30.618 13.677 16.169 2.725 0 1.195V36h34.896z");
}
</style><path class="l1_8d-czw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:bald"} {...others} />);
}

export default Component;
