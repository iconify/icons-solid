import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zc0tz1cqs {
  fill: currentColor;
  d: path("M6 3h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2m1.293 13.707a.999.999 0 1 1 1.414-1.414L11 17.586V8a1 1 0 0 1 2 0v9.586l2.293-2.293a.999.999 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0Z");
}
</style><path class="zc0tz1cqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-down-from-line-fill-round"} {...others} />);
}

export default Component;
