import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t-y62113c {
  fill: currentColor;
  d: path("M8 15h6.586l-3.293-3.293a.999.999 0 1 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a.999.999 0 1 1-1.414-1.414L14.586 17H7a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0Z");
}
</style><path class="t-y62113c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-turn-down-right-fill-sharp"} {...others} />);
}

export default Component;
