import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y2cv49iyg {
  fill: currentColor;
  d: path("M4 4v9.586l3.293-3.293a1 1 0 0 1 1.414 0L12 13.586l8.293-8.293a.999.999 0 1 1 1.414 1.414l-9 9a1 1 0 0 1-1.414 0L8 12.414l-4 4V19h17a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0");
}
</style><path class="y2cv49iyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-line-fill-sharp"} {...others} />);
}

export default Component;
