import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cosjxpbmn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 20.076C5.5658 20.6663 6.348 21 7.1657 21C8.5051 21 9.6823 20.1121 10.0502 18.8242L13.9498 5.1758C14.3177 3.8879 15.4949 3 16.8343 3C17.652 3 18.4342 3.3337 19 3.924M8.5 10L16.5 10");
}
</style><path class="cosjxpbmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:function-duotone"} {...others} />);
}

export default Component;
