import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.g5h7ze7vw {
  fill: currentColor;
  d: path("M16.854 8.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L12 5.707V12a2 2 0 0 1-2 2H3.5a.5.5 0 0 0 0 1H10a3 3 0 0 0 3-3V5.707l3.146 3.147a.5.5 0 0 0 .708 0");
}
</style><path class="g5h7ze7vw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-turn-right-up-20-regular"} {...others} />);
}

export default Component;
