import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zrec87wmt {
  fill: currentColor;
  d: path("M8 12a3 3 0 0 0 3 3h3.586l-3.293-3.293a.999.999 0 1 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a.999.999 0 1 1-1.414-1.414L14.586 17H11a5 5 0 0 1-5-5V3a1 1 0 0 1 2 0Z");
}
</style><path class="zrec87wmt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-turn-down-right-fill-round"} {...others} />);
}

export default Component;
