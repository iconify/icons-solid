import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oxi0jx9ip {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 9.25c0-3-1.75-5-4.25-5s-4 1.75-4 4s1 3 2 3.25M12 9.25c0-3 1.75-5 4.25-5s4 1.75 4 4s-1 3-2 3.25M12 9.25v11");
}
</style><path class="oxi0jx9ip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:zodiac-aries"} {...others} />);
}

export default Component;
