import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dkqycepzl {
  fill: currentColor;
  d: path("m18 21l-1.4-1.4l1.575-1.6H14v-2h4.175L16.6 14.4L18 13l4 4zM7 10h8V8H7zm0 4h5v-2H7zm-4 7V6q0-.825.588-1.412T5 4h12q.825 0 1.413.588T19 6v5.075q-.25-.05-.5-.062T18 11q-2.525 0-4.262 1.75T12 17q0 .25.013.5t.062.5H6z");
}
</style><path class="dkqycepzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:chat-paste-go"} {...others} />);
}

export default Component;
