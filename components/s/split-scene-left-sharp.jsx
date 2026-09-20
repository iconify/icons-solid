import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d-q_-0bar {
  fill: currentColor;
  d: path("M15 20V4h6v16zm-4 2v-2H3V4h8V2h2v20z");
}
</style><path class="d-q_-0bar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:split-scene-left-sharp"} {...others} />);
}

export default Component;
