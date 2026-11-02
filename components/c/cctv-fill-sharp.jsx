import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wnu9zac9f {
  fill: currentColor;
  d: path("M2 7V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v6a8 8 0 0 1-16 0V8H3a1 1 0 0 1-1-1m4 1v6a6 6 0 1 0 12 0V8Zm2.315 4.443a4.001 4.001 0 0 1 7.37 3.114a4.001 4.001 0 0 1-7.37-3.114");
}
</style><path class="wnu9zac9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cctv-fill-sharp"} {...others} />);
}

export default Component;
