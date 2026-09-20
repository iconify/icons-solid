import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xbo2b4bzc {
  fill: currentColor;
  d: path("M10 9h8V7h-8zm0 3h5v-2h-5zm-6.525 9.25L1.75 8.35L4 8.125V18h15.025v1.1zM6 16.1V3h16v13.1z");
}
</style><path class="xbo2b4bzc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:cards-stack-sharp"} {...others} />);
}

export default Component;
