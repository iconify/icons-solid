import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dt7y3rbea {
  cx: 6.5px;
  cy: 19.5px;
  r: 1.25px;
}

.ewrtu4bou {
  d: path("M3.75 9.25h16.5v5.5H3.75z");
}

.fbp8fgpqp {
  cx: 17.5px;
  cy: 19.5px;
  r: 1.25px;
}

.jcxm0gmcx {
  cx: 12px;
  cy: 19.5px;
  r: 1.25px;
}

.o-_1o3beq {
  cx: 6.5px;
  cy: 4.5px;
  r: 1.25px;
}

.ou244bblc {
  cx: 12px;
  cy: 4.5px;
  r: 1.25px;
}

.u38whcbki {
  cx: 17.5px;
  cy: 4.5px;
  r: 1.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ewrtu4bou"/><circle class="o-_1o3beq"/><circle class="ou244bblc"/><circle class="u38whcbki"/><circle class="dt7y3rbea"/><circle class="jcxm0gmcx"/><circle class="fbp8fgpqp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:boardroom-sharp"} {...others} />);
}

export default Component;
