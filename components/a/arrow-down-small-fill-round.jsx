import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pj4xylkqk {
  fill: currentColor;
  d: path("m11.293 17.707l-4-4a.999.999 0 1 1 1.414-1.414L11 14.586V7a1 1 0 0 1 2 0v7.586l2.293-2.293a.999.999 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0");
}
</style><path class="pj4xylkqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-down-small-fill-round"} {...others} />);
}

export default Component;
