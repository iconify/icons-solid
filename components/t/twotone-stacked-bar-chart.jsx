import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sidqtxeks {
  fill: currentColor;
  d: path("M4 9h4v11H4zm0-5h4v4H4zm6 3h4v4h-4zm6 3h4v4h-4zm0 5h4v5h-4zm-6-3h4v8h-4z");
}
</style><path class="sidqtxeks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-stacked-bar-chart"} {...others} />);
}

export default Component;
