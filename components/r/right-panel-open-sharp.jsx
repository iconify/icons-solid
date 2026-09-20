import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bbor5-b8f {
  fill: currentColor;
  d: path("M11.5 16V8l-4 4zM5 19h9V5H5zm-2 2V3h18v18z");
}
</style><path class="bbor5-b8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:right-panel-open-sharp"} {...others} />);
}

export default Component;
