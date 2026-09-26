import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e757wub0o {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 7L19 7L19 11C19 14.866 15.866 18 12 18C8.134 18 5 14.866 5 11L5 7ZM9 1L9 7M15 1L15 7M12 18L12 23");
}
</style><path class="e757wub0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:plug-sharp"} {...others} />);
}

export default Component;
