import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.tjypd-ruw {
  fill: currentColor;
  d: path("M244 80v24a4 4 0 0 1-8 0V84H130.77l-47 125.4a4 4 0 0 1-7.49 0l-48-128a4 4 0 1 1 7.49-2.81L80 196.61l44.26-118A4 4 0 0 1 128 76h112a4 4 0 0 1 4 4");
}
</style><path class="tjypd-ruw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:radical-thin"} {...others} />);
}

export default Component;
