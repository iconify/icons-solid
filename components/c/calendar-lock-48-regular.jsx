import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.xamdy84nf {
  fill: currentColor;
  d: path("M6 12.25A6.25 6.25 0 0 1 12.25 6h23.5A6.25 6.25 0 0 1 42 12.25v11.851a7 7 0 0 0-2.5-1.641V16.5h-31v19.25a3.75 3.75 0 0 0 3.75 3.75H26V42H12.25A6.25 6.25 0 0 1 6 35.75zm6.25-3.75a3.75 3.75 0 0 0-3.75 3.75V14h31v-1.75a3.75 3.75 0 0 0-3.75-3.75zM32 30h-1a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V33a3 3 0 0 0-3-3h-1v-1a5 5 0 0 0-10 0zm2.5-1a2.5 2.5 0 0 1 5 0v1h-5zm5.5 9a3 3 0 1 1-6 0a3 3 0 0 1 6 0");
}
</style><path class="xamdy84nf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:calendar-lock-48-regular"} {...others} />);
}

export default Component;
