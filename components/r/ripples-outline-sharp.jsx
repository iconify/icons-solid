import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hyxmcobnz {
  fill: currentColor;
  d: path("M5 19h14v-8.55q-.45.275-.962.413T17 11q-1.65 0-2.825-1.175T13 7q0-.525.138-1.038T13.55 5H5zm-2 2V3h18v18zM5 5v14z");
}
</style><path class="hyxmcobnz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:ripples-outline-sharp"} {...others} />);
}

export default Component;
