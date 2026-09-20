import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":393};
const content = `<style>.kir1pdbpt {
  d: path("M128.001 0L0 130.725v130.726h128.001l127.958-130.726V0z");
}

.qef7669wi {
  fill: var(--svg-color--19d89f, #19d89f);
  d: path("M256 261.407H127.998v130.725H256z");
}
</style><path class="qef7669wi"/><path class="kir1pdbpt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:katalon-icon"} {...others} />);
}

export default Component;
