import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ywrpw9bgm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3za6.5 6.5 0 0 1 6.5 6.5V15a6.5 6.5 0 0 1-6.5 6.5A6.5 6.5 0 0 1 5.5 15V9.5A6.5 6.5 0 0 1 12 3M5.5 8.5h13M9 13h6m-6 3.5h6");
}
</style><path class="ywrpw9bgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:speaker-smart"} {...others} />);
}

export default Component;
