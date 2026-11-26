import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z2eu97loi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 11C14.7614 11 17 13.2386 17 16C17 18.7614 14.7614 21 12 21C9.2386 21 7 18.7614 7 16C7 13.2386 9.2386 11 12 11ZM4 3C4 7.4183 7.5817 11 12 11C16.4183 11 20 7.4183 20 3");
}
</style><path class="z2eu97loi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:zodiac-taurus-duotone"} {...others} />);
}

export default Component;
