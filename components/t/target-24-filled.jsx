import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kgm001byy {
  fill: currentColor;
  d: path("M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-6-2a6 6 0 1 1 12 0a6 6 0 0 1-12 0m6-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16");
}
</style><path class="kgm001byy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:target-24-filled"} {...others} />);
}

export default Component;
