import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iqwh2rb3o {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 4.75a2 2 0 0 1 2-2h8.5a2 2 0 0 1 2 2V10a2 2 0 0 0 0 4v5.25a2 2 0 0 1-2 2h-8.5a2 2 0 0 1-2-2V14a2 2 0 0 0 0-4ZM12 7v5.5");
}

.tb6q2fbtf {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 15.75h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="iqwh2rb3o"/><path class="tb6q2fbtf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:fine-ticket"} {...others} />);
}

export default Component;
