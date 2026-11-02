import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q5liy5rbg {
  fill: currentColor;
  d: path("M3.293 17.707a.999.999 0 1 1 1.414-1.414L6 17.586V4a1 1 0 0 1 2 0v13.586l1.293-1.293a.999.999 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0ZM13 10V7a4 4 0 0 1 8 0v3a1 1 0 0 1-2 0V9h-4v1a1 1 0 0 1-2 0m2-3h4a2 2 0 1 0-4 0m5 6a1.002 1.002 0 0 1 .707 1.707L16.414 19H20a1 1 0 0 1 0 2h-6a1.002 1.002 0 0 1-.707-1.707L17.586 15H14a1 1 0 0 1 0-2Z");
}
</style><path class="q5liy5rbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:sort-a-z-bulk-sharp"} {...others} />);
}

export default Component;
