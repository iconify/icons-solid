import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.f0coyab8t {
  fill: var(--svg-color--3b88c3, #3b88c3);
  d: path("M0 32a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4z");
}

.x-14brbjw {
  fill: var(--svg-color--fff, #fff);
  d: path("M28 7L6 18l22 11z");
}
</style><path class="f0coyab8t"/><path class="x-14brbjw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:reverse-button"} {...others} />);
}

export default Component;
