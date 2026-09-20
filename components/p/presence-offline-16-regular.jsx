import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.fi_c8lhbz {
  fill: currentColor;
  d: path("M10.707 5.293a1 1 0 0 1 0 1.414L9.414 8l1.293 1.293a1 1 0 0 1-1.414 1.414L8 9.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L6.586 8L5.293 6.707a1 1 0 0 1 1.414-1.414L8 6.586l1.293-1.293a1 1 0 0 1 1.414 0M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2");
}
</style><path class="fi_c8lhbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:presence-offline-16-regular"} {...others} />);
}

export default Component;
