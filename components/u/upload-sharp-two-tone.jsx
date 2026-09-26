import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p3xqt9u1y {
  d: path("M4 17L4 21L20 21L20 17");
}

.rwjzogb5q {
  stroke-opacity: 0.4;
  d: path("M12 15L12 3M7.7071 7.2929L12 3L16.2929 7.2929");
}
</style><g class="gp_8x1bzb"><path class="rwjzogb5q"/><path class="p3xqt9u1y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:upload-sharp-two-tone"} {...others} />);
}

export default Component;
