import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zpzhyojuw {
  fill: currentColor;
  d: path("M4 22V8q0-1.4.85-2.45T7 4.15V2h3v2h4V2h3v2.15q1.3.35 2.15 1.4T20 8v14zm10.5-6h2v-4h-9v2h7z");
}
</style><path class="zpzhyojuw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:backpack-sharp"} {...others} />);
}

export default Component;
