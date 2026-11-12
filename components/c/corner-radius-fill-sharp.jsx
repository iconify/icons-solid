import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sxfg33b8p {
  fill: currentColor;
  d: path("M2 17C2 8.716 8.716 2 17 2h4a1 1 0 0 1 0 2h-4C9.82 4 4 9.82 4 17v4a1 1 0 0 1-2 0ZM2 5V3a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H4v1a1 1 0 0 1-2 0");
}
</style><path class="sxfg33b8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:corner-radius-fill-sharp"} {...others} />);
}

export default Component;
