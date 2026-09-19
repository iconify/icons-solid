import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j1d7z9_pi {
  fill: currentColor;
  d: path("M2.5 19h19v2h-19zm16.84-3.15c.8.21 1.62-.26 1.84-1.06c.21-.8-.26-1.62-1.06-1.84l-5.31-1.42l-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32l-1.45-.39v5.17z");
}
</style><path class="j1d7z9_pi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-flight-land"} {...others} />);
}

export default Component;
