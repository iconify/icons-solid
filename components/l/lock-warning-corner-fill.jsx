import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hw5nl_aah {
  fill: currentColor;
  d: path("M6 8h1V7a5 5 0 0 1 10 0v1h1a3 3 0 0 1 3 3a1 1 0 0 1-1 1h-7a.997.997 0 0 0-1 1v8a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3m9 0V7a3 3 0 1 0-6 0v1Zm4 7v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0m-1 5h.01a1 1 0 0 1 0 2H18a1 1 0 0 1 0-2");
}
</style><path class="hw5nl_aah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:lock-warning-corner-fill"} {...others} />);
}

export default Component;
