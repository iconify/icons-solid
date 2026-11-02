import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bwzylw6-z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m14 8.536l4.794-2.768l2 3.464L16 12l4.794 2.768l-2 3.464L14 15.464V21h-4v-5.536l-4.794 2.768l-2-3.464L8 12L3.206 9.232l2-3.464L10 8.536V3h4z");
}
</style><path class="bwzylw6-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:medical-cross-duocolor-sharp"} {...others} />);
}

export default Component;
