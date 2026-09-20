import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ab520sr9l {
  fill: currentColor;
  d: path("M4 22V8q0-1.4.85-2.45T7 4.15V2h3v2h4V2h3v2.15q1.3.35 2.15 1.4T20 8v14zm2-2h12V8q0-.825-.587-1.412T16 6H8q-.825 0-1.412.588T6 8zm8.5-4h2v-4h-9v2h7zM12 13");
}
</style><path class="ab520sr9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:backpack-outline-sharp"} {...others} />);
}

export default Component;
