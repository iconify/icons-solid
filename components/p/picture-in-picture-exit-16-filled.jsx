import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.cspk-227o {
  fill: currentColor;
  d: path("M7 7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1zm-5 4.5V8h5a2 2 0 0 0 2-2V4h3.5A2.5 2.5 0 0 1 15 6.5v5a2.5 2.5 0 0 1-2.5 2.5h-8A2.5 2.5 0 0 1 2 11.5m8.5-.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.793l-1.646-1.647a.5.5 0 0 0-.708.708L11.293 11z");
}
</style><path class="cspk-227o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:picture-in-picture-exit-16-filled"} {...others} />);
}

export default Component;
