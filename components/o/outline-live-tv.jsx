import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tt0wdpbjz {
  fill: currentColor;
  d: path("M9 10v8l7-4zm12-4h-7.58l3.29-3.29L16 2l-4 4h-.03l-4-4l-.69.71L10.56 6H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 14H3V8h18z");
}
</style><path class="tt0wdpbjz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-live-tv"} {...others} />);
}

export default Component;
