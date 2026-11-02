import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q5n2a1blr {
  fill: currentColor;
  d: path("m11 12.414l-5-5V9a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H7.414L12 10.586L16.586 6H15a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V7.414l-5 5V19a1 1 0 0 1-2 0Z");
}
</style><path class="q5n2a1blr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:split-bulk-round"} {...others} />);
}

export default Component;
