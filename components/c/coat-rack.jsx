import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dm4__-85v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3v15.75m0-.5l-4.25 3m4.25-3l4.25 3M12 7L7.75 4.5M12 7l4.25-2.5m-4.25 7L8.25 9.25M12 11.5l3.75-2.25");
}
</style><path class="dm4__-85v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:coat-rack"} {...others} />);
}

export default Component;
