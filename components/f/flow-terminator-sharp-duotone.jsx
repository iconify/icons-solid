import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mu1_rfg6e {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 5L15 5C18.866 5 22 8.134 22 12C22 15.866 18.866 19 15 19L9 19C5.134 19 2 15.866 2 12C2 8.134 5.134 5 9 5Z");
}
</style><path class="mu1_rfg6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:flow-terminator-sharp-duotone"} {...others} />);
}

export default Component;
