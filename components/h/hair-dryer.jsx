import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jgphdl2ay {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 10L12.3216 17.3922C12.1346 18.3271 11.3138 19 10.3604 19H9.43961C8.33501 19 7.43961 18.1046 7.43961 17C7.43961 16.8683 7.45261 16.7369 7.47841 16.6078L9.00001 10M9 2L21 4V9L9 10C6.7909 10 5 8.2091 5 6C5 3.7909 6.7909 2 9 2ZM9.5 19C9.5 20.6569 8.15685 22 6.5 22H3");
}
</style><path class="jgphdl2ay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:hair-dryer"} {...others} />);
}

export default Component;
