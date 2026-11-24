import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.chw8qebkr {
  fill: currentColor;
  d: path("M22 5v3H2V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1M2 10h8v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Zm11 5h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2");
}
</style><path class="chw8qebkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:credit-card-minus-corner-fill-sharp"} {...others} />);
}

export default Component;
