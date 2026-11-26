import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ph26gdc3v {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13.5 6.5L15 2L9 2L10.5 6.5M13.5 6.5L15.9996 16.9844L12 21.9999L8.0004 16.9844L10.5 6.5M13.5 6.5L10.5 6.5");
}
</style><path class="ph26gdc3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:necktie-sharp"} {...others} />);
}

export default Component;
