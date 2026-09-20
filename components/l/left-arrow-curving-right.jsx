import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.f0coyab8t {
  fill: var(--svg-color--3b88c3, #3b88c3);
  d: path("M0 32a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4z");
}

.ymyxxybgh {
  fill: var(--svg-color--fff, #fff);
  d: path("M29.2 25L22 19v4h-4a7 7 0 0 1 0-14h8V5h-8C11.926 5 7 9.925 7 16c0 6.074 4.926 11 11 11h4v4z");
}
</style><path class="f0coyab8t"/><path class="ymyxxybgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:left-arrow-curving-right"} {...others} />);
}

export default Component;
