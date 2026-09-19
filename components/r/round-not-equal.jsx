import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eae5qyb6x {
  fill: currentColor;
  d: path("M14.999 5c.507.219.742.806.525 1.314l-5.212 12.162A1 1 0 0 1 9 19a1 1 0 0 1-.525-1.314l5.212-12.162A1 1 0 0 1 15 5z");
}

.wlxuxlbuw {
  fill: currentColor;
  d: path("M18 9.998H6a1 1 0 1 1 0-2h12a1 1 0 0 1 0 2m0 6H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2");
}
</style><path class="wlxuxlbuw"/><path class="eae5qyb6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-not-equal"} {...others} />);
}

export default Component;
