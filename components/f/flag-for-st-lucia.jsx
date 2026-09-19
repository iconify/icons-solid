import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.awy6a3qja {
  fill: var(--svg-color--ffce31, #ffce31);
  d: path("M32 33L20 45h24z");
}

.jrsksb7rz {
  fill: var(--svg-color--3e4347, #3e4347);
  d: path("M32 21L20 45h24z");
}

.kdr-xzbfv {
  fill: var(--svg-color--fff, #fff);
  d: path("M32 15L17 45h30z");
}

.uih2s6b6k {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--49c3f2, #49c3f2);
}
</style><circle class="uih2s6b6k"/><path class="kdr-xzbfv"/><path class="jrsksb7rz"/><path class="awy6a3qja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:flag-for-st-lucia"} {...others} />);
}

export default Component;
