import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.phh-p4btz {
  fill: currentColor;
  d: path("M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3v2h18v-2zm-9 0H6V5h5zm7 0h-5V5h5z");
}

.v6-fidbzk {
  fill: currentColor;
  d: path("M8 11h2v2H8zm6 0h2v2h-2z");
}

.ygsd2hbwr {
  fill: currentColor;
  d: path("M13 19h5V5h-5zm1-8h2v2h-2zm-8 8h5V5H6zm2-8h2v2H8z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="ygsd2hbwr"/><path class="phh-p4btz"/><path class="v6-fidbzk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-door-sliding"} {...others} />);
}

export default Component;
