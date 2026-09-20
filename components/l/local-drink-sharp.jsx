import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lbn7drffw {
  fill: currentColor;
  d: path("M5.2 22L3 2h18l-2.2 20zm.45-14h12.7l.4-4H5.25zm8.375 10.175q.825-.825.825-2.025q0-1.025-.663-2.225T12 11q-1.525 1.725-2.187 2.925T9.15 16.15q0 1.2.825 2.025T12 19t2.025-.825");
}
</style><path class="lbn7drffw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:local-drink-sharp"} {...others} />);
}

export default Component;
