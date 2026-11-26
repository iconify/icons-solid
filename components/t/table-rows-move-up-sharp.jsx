import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sz1d-fbjz {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 4L3 4L3 22L21 22L21 4L18 4M3 13L21 13M12 9L12 2M8.7071 5.2929L12 2L15.2929 5.2929");
}
</style><path class="sz1d-fbjz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:table-rows-move-up-sharp"} {...others} />);
}

export default Component;
