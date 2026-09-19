import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j9v6u9shy {
  fill: currentColor;
  d: path("m15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2-5V9h8v10H8zm2 4h4v-4h2l-4-4l-4 4h2z");
}
</style><path class="j9v6u9shy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-restore-from-trash"} {...others} />);
}

export default Component;
