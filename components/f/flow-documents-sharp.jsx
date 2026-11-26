import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kvjunttok {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 17L6 9L22 9L22 16.536L20.5 15.6699C19.7399 15.231 18.8777 15 18 15C16.4262 15 14.9443 15.741 14 17C13.0557 18.259 11.5738 19 10 19C8.4262 19 6.9443 18.259 6 17ZM2 13L2 5L16 5");
}
</style><path class="kvjunttok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:flow-documents-sharp"} {...others} />);
}

export default Component;
