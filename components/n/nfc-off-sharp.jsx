import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lu9cghddb {
  fill: currentColor;
  d: path("M4 20V5.421L1.887 3.308l.713-.714l19.223 19.223l-.713.714L18.579 20zm4-4h6.579l-1-1H9v-4.579l-1-1zm12 1.208l-4-4V8h-4.471v.737L6.792 4H20zm-5-5l-2.5-2.5V9H15z");
}
</style><path class="lu9cghddb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:nfc-off-sharp"} {...others} />);
}

export default Component;
