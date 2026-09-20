import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.xf450qbhj {
  fill: currentColor;
  d: path("M76 48a12 12 0 1 1-12-12a12 12 0 0 1 12 12m52-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m64 24a12 12 0 1 0-12-12a12 12 0 0 0 12 12M64 92a12 12 0 1 0 12 12a12 12 0 0 0-12-12m64 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m64 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12M64 148a12 12 0 1 0 12 12a12 12 0 0 0-12-12m64 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m0 56a12 12 0 1 0 12 12a12 12 0 0 0-12-12m64-56a12 12 0 1 0 12 12a12 12 0 0 0-12-12");
}
</style><path class="xf450qbhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:numpad-thin"} {...others} />);
}

export default Component;
