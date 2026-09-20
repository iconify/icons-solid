import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mnl2zib4p {
  fill: currentColor;
  d: path("M3 19V5h18v14zm5.154-4.154h7.692V9.154H8.154z");
}
</style><path class="mnl2zib4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:picture-in-picture-center-sharp"} {...others} />);
}

export default Component;
