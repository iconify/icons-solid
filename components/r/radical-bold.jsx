import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.mgm6svima {
  fill: currentColor;
  d: path("M252 80v24a12 12 0 0 1-24 0V92h-91.68L91.24 212.21a12 12 0 0 1-22.47 0l-48-128a12 12 0 1 1 22.47-8.43l36.76 98l36.77-98A12 12 0 0 1 128 68h112a12 12 0 0 1 12 12");
}
</style><path class="mgm6svima"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:radical-bold"} {...others} />);
}

export default Component;
