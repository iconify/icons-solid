import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oyaio_jdu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3H21M4 3V21H8C8 18.5 6 16.5 4 15C7.5 12.5 10 9 10 3M20 3V21H16C16 18.5 18 16.5 20 15C16.5 12.5 14 9 14 3");
}
</style><path class="oyaio_jdu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:curtains-open"} {...others} />);
}

export default Component;
