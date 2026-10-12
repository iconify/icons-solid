import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.no45blbsy {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 4.75V7m3.3 2.89L14 16.16q-.1.49-.3.03l-1.15-2.68q-.2-.46-.69-.58l-2.82-.66q-.49-.12-.03-.31l5.93-2.37q.46-.19.36.3");
}

.r-szyebfg {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.75 16.75h.01");
}

.sf-oocn4o {
  cx: 12px;
  cy: 13px;
  r: 8.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="sf-oocn4o"/><path class="no45blbsy"/><path class="r-szyebfg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:minimap"} {...others} />);
}

export default Component;
