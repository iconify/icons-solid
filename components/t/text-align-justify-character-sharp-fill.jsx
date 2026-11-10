import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nye9nrblr {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2.87 10.23L7 3L11.13 10.23M9.285 7H4.715M14 3H22M14 9H22M2 15H22M2 21H22");
}
</style><path class="nye9nrblr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:text-align-justify-character-sharp-fill"} {...others} />);
}

export default Component;
