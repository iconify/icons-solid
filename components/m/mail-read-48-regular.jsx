import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ft41x-oar {
  fill: currentColor;
  d: path("M22.29 6.915a3.75 3.75 0 0 1 3.42 0l13.75 7.042a3.75 3.75 0 0 1 1.53 1.451L24.003 24.35l-16.96-8.998a3.75 3.75 0 0 1 1.498-1.395zM6.5 17.894l16.914 8.974a1.25 1.25 0 0 0 1.168.002L41.5 17.965V33.75a3.75 3.75 0 0 1-3.75 3.75h-27.5a3.75 3.75 0 0 1-3.75-3.75zM26.849 4.69a6.25 6.25 0 0 0-5.698 0l-13.75 7.042A6.25 6.25 0 0 0 4 17.295V33.75A6.25 6.25 0 0 0 10.25 40h27.5A6.25 6.25 0 0 0 44 33.75V17.295a6.25 6.25 0 0 0-3.401-5.563z");
}
</style><path class="ft41x-oar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:mail-read-48-regular"} {...others} />);
}

export default Component;
