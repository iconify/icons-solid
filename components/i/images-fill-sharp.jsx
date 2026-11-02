import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x9wed5b_p {
  fill: currentColor;
  d: path("M7 2h14a1 1 0 0 1 1 1v14a1 1 0 0 1-2 0V4H7a1 1 0 0 1 0-2M2 16.586V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9.586l-3.293-3.293a1 1 0 0 0-1.414 0L12 14.586l-3.293-3.293a1 1 0 0 0-1.414 0Zm15.707 2.535a1 1 0 0 0 .293.203V21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1.676a1 1 0 0 0 .293-.203L8 13.414l3.293 3.293a1 1 0 0 0 1.414 0L14 15.414Z");
}
</style><path class="x9wed5b_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:images-fill-sharp"} {...others} />);
}

export default Component;
