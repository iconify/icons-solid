import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.quzqgulks {
  fill: currentColor;
  d: path("M9 11a7 7 0 0 1 7-7h1.5a1 1 0 1 0 0-2H16a9 9 0 0 0-9 9a1 1 0 0 1-1 1H3a1 1 0 1 0 0 2h3a3 3 0 0 0 3-3m8-3a4 4 0 0 0-4 4a6 6 0 0 1-6 6H3a1 1 0 1 1 0-2h4a4 4 0 0 0 4-4a6 6 0 0 1 6-6h4a1 1 0 1 1 0 2zm1 4a1 1 0 0 0-1 1a9 9 0 0 1-9 9H6a1 1 0 1 1 0-2h2a7 7 0 0 0 7-7a3 3 0 0 1 3-3h3a1 1 0 1 1 0 2z");
}
</style><path class="quzqgulks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:stream-24-filled"} {...others} />);
}

export default Component;
