import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e4jm6heah {
  fill: currentColor;
  d: path("M6.25 3A3.25 3.25 0 0 0 3 6.25V11h11V3zM3 17.75V12.5h11V21H6.25A3.25 3.25 0 0 1 3 17.75M15.5 16v5h2.25A3.25 3.25 0 0 0 21 17.75V16zm5.5-1.5v-5h-5.5v5zM21 8h-5.5V3h2.25A3.25 3.25 0 0 1 21 6.25z");
}
</style><path class="e4jm6heah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:board-split-24-filled"} {...others} />);
}

export default Component;
