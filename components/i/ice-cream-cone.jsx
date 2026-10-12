import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kmk29j5tz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 9.5a6 6 0 0 1 12 0ZM7.5 13h9q1 0 .45.83l-4.4 6.59q-.55.83-1.1 0l-4.4-6.59Q6.5 13 7.5 13");
}
</style><path class="kmk29j5tz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ice-cream-cone"} {...others} />);
}

export default Component;
