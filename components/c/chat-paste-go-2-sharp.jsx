import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d2d6jzxqz {
  fill: currentColor;
  d: path("m18 21l-1.4-1.4l1.575-1.6H14v-2h4.175L16.6 14.4L18 13l4 4zM3 21V4h16v7.075q-.25-.05-.5-.062T18 11q-2.525 0-4.262 1.75T12 17q0 .25.013.5t.062.5H6z");
}
</style><path class="d2d6jzxqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:chat-paste-go-2-sharp"} {...others} />);
}

export default Component;
