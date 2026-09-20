import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.og7evsbrq {
  fill: var(--svg-color--eee, #eee);
  d: path("M32 5H4a4 4 0 0 0-4 4v9h36V9a4 4 0 0 0-4-4");
}

.onwgbii6j {
  fill: var(--svg-color--dc143c, #dc143c);
  d: path("M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-9H0z");
}
</style><path class="og7evsbrq"/><path class="onwgbii6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:flag-for-poland"} {...others} />);
}

export default Component;
