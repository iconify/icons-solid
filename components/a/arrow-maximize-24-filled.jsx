import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mszg0pbkk {
  fill: currentColor;
  d: path("M19.5 3.5a1 1 0 0 1 1 1V12a1 1 0 1 1-2 0V6.914L6.914 18.5H12a1 1 0 1 1 0 2H4.5a1 1 0 0 1-1-1V12a1 1 0 1 1 2 0v5.086L17.086 5.5H12a1 1 0 1 1 0-2z");
}
</style><path class="mszg0pbkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-maximize-24-filled"} {...others} />);
}

export default Component;
