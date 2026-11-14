import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v5dlu8f0b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.2 20.5H3.5V5h17v5.8M8 3v4m8-4v4M3.5 10h17M8 3v4m8-4v4M3.5 10h17M15 21l.5-2.25l4.5-4.5L21.75 16l-4.5 4.5Z");
}
</style><path class="v5dlu8f0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:calendar-edit"} {...others} />);
}

export default Component;
