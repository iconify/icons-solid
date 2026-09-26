import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vouipkonk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L6.7003 3C7.4906 3 8.2069 3.4655 8.5279 4.1877L15.4721 19.8123C15.7931 20.5345 16.5094 21 17.2997 21L21 21M13 3L21 3");
}
</style><path class="vouipkonk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:option-duotone"} {...others} />);
}

export default Component;
