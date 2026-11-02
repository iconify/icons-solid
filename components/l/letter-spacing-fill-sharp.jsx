import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lvj7bob1u {
  fill: currentColor;
  d: path("M8 10V7a4 4 0 0 1 8 0v3a1 1 0 0 1-2 0V9h-4v1a1 1 0 0 1-2 0m2-3h4a2 2 0 1 0-4 0m-3.293 7.707L5.414 16h13.172l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a.999.999 0 1 1-1.414-1.414L18.586 18H5.414l1.293 1.293a.999.999 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a.999.999 0 1 1 1.414 1.414");
}
</style><path class="lvj7bob1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:letter-spacing-fill-sharp"} {...others} />);
}

export default Component;
