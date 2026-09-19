import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.mpvv5qmpq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 35.87c-2.437-.636-4.875-1.272-9.75-1.272c-9.75 0-9.75 2.543-19.5 2.543c-4.875 0-7.313-.636-9.75-1.271V12.13c2.437.636 4.875 1.272 9.75 1.272c9.75 0 9.75-2.543 19.5-2.543c4.875 0 7.312.636 9.75 1.271zm-26 1.161V13.292m13 21.416V10.969");
}
</style><path class="mpvv5qmpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:emoji-flag-3-lines"} {...others} />);
}

export default Component;
