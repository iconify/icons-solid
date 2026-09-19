import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eetr2xbnj {
  fill: currentColor;
  d: path("M7 15H5.5v-4.5H4V9h3zm6.5-1.5h-3v-1h3V9H9v1.5h3v1H9V15h4.5zm6 1.5V9H15v1.5h3v1h-2v1h2v1h-3V15z");
}
</style><path class="eetr2xbnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-123"} {...others} />);
}

export default Component;
