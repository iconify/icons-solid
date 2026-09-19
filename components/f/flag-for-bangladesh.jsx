import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.htnvsqbki {
  cx: 26px;
  cy: 32px;
  r: 14.1px;
  fill: var(--svg-color--ed4c5c, #ed4c5c);
}

.hzzz1jv6x {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--699635, #699635);
}

.v4b77y8vr {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--75a843, #75a843);
}
</style><circle class="v4b77y8vr"/><circle class="hzzz1jv6x"/><circle class="htnvsqbki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:flag-for-bangladesh"} {...others} />);
}

export default Component;
