import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.gedq92b0w {
  fill: currentColor;
  d: path("M10 4a6 6 0 1 1-5.982 5.538a.5.5 0 1 0-.998-.076Q3 9.73 3 10a7 7 0 1 0 2-4.899V3.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1H5.528A5.98 5.98 0 0 1 10 4m0 2.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1H10z");
}
</style><path class="gedq92b0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:history-20-regular"} {...others} />);
}

export default Component;
