import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.fwgot-b6f {
  cx: 18px;
  cy: 32px;
  r: 3px;
  fill: var(--svg-color--ccd6dd, #ccd6dd);
}

.gq5mj_c8a {
  fill: var(--svg-color--ccd6dd, #ccd6dd);
  d: path("M21 24a3 3 0 1 1-6 0V5a3 3 0 1 1 6 0z");
}
</style><circle class="fwgot-b6f"/><path class="gq5mj_c8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:white-exclamation-mark"} {...others} />);
}

export default Component;
