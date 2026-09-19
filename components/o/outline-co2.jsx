import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jl_hr-_go {
  fill: currentColor;
  d: path("M14 9h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1m-.5 4.5h-2v-3h2zM8 13v1c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1H6.5v-.5h-2v3h2V13zm12.5 2.5h-2v1h3V18H17v-2.5c0-.55.45-1 1-1h2v-1h-3V12h3.5c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1");
}
</style><path class="jl_hr-_go"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-co2"} {...others} />);
}

export default Component;
