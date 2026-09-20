import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.gkx4eacaa {
  fill: var(--svg-color--ed2939, #ed2939);
  d: path("M32 5H4a4 4 0 0 0-4 4v4h36V9a4 4 0 0 0-4-4M4 31h28a4 4 0 0 0 4-4v-4H0v4a4 4 0 0 0 4 4");
}

.vbxe0xtoi {
  fill: var(--svg-color--eee, #eee);
  d: path("M0 13h36v10H0z");
}
</style><path class="vbxe0xtoi"/><path class="gkx4eacaa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:flag-austria"} {...others} />);
}

export default Component;
