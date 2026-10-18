import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a_uw67e9m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14.4051 4.3922C13.3181 2.536 10.6819 2.536 9.5949 4.3922L2.4006 16.6777C1.2854 18.5822 2.6307 21 4.8057 21L19.1943 21C21.3693 21 22.7146 18.5822 21.5994 16.6777L14.4051 4.3922Z");
}
</style><path class="a_uw67e9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:triangle-duotone"} {...others} />);
}

export default Component;
