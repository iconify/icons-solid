import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c6hm1qwau {
  fill: currentColor;
  d: path("M16 10a2 2 0 1 1 3.999-.001A2 2 0 0 1 16 10m-6 2a2 2 0 1 1 3.999-.001A2 2 0 0 1 10 12m-6 2a2 2 0 1 1 3.999-.001A2 2 0 0 1 4 14");
}
</style><path class="c6hm1qwau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:loading-fill"} {...others} />);
}

export default Component;
