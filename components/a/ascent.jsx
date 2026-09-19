import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dwkd-ru0c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 30.067C43.5 18.1 33.8 8.4 21.833 8.4C12.26 8.4 4.5 16.16 4.5 25.733c0 7.659 6.208 13.867 13.867 13.867c6.126 0 11.093-4.967 11.093-11.093a8.875 8.875 0 0 0-8.875-8.875a7.1 7.1 0 0 0-7.1 7.1a5.68 5.68 0 0 0 5.68 5.68a4.544 4.544 0 0 0 4.544-4.544a3.635 3.635 0 0 0-3.635-3.635a2.91 2.91 0 0 0-2.908 2.908");
}
</style><path class="dwkd-ru0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ascent"} {...others} />);
}

export default Component;
