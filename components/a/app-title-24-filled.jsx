import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qrf_97w3h {
  fill: currentColor;
  d: path("M4.75 20.5h14.5a.75.75 0 0 1 .102 1.493L19.25 22H4.75a.75.75 0 0 1-.102-1.493zh14.5zM16.25 3A3.75 3.75 0 0 1 20 6.75v8.5A3.75 3.75 0 0 1 16.25 19h-8.5A3.75 3.75 0 0 1 4 15.25v-8.5A3.75 3.75 0 0 1 7.75 3z");
}
</style><path class="qrf_97w3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:app-title-24-filled"} {...others} />);
}

export default Component;
