import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.fm-r3tbnm {
  fill: var(--svg-color--eee, #eee);
  d: path("M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z");
}

.zj3doobpn {
  cx: 18px;
  cy: 18px;
  r: 7px;
  fill: var(--svg-color--ed1b2f, #ed1b2f);
}
</style><path class="fm-r3tbnm"/><circle class="zj3doobpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:flag-japan"} {...others} />);
}

export default Component;
