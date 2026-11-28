import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cf2byib9q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 16H5C3.3431 16 2 14.6569 2 13V5C2 3.3431 3.3431 2 5 2H17C18.6569 2 20 3.3431 20 5V6M18 10C20.2091 10 22 11.7909 22 14V18C22 20.2091 20.2091 22 18 22C15.7909 22 14 20.2091 14 18V14C14 11.7909 15.7909 10 18 10ZM18 14V15");
}
</style><path class="cf2byib9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:touchpad-mouse"} {...others} />);
}

export default Component;
