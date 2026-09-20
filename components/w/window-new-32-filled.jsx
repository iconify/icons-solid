import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.ip52h8dea {
  fill: currentColor;
  d: path("M24.5 3A4.5 4.5 0 0 1 29 7.5v13a4.5 4.5 0 0 1-4.025 4.475A4.5 4.5 0 0 1 20.5 29h-10A7.5 7.5 0 0 1 3 21.5v-10a4.5 4.5 0 0 1 4.024-4.476A4.5 4.5 0 0 1 11.5 3zM7 9.05a2.5 2.5 0 0 0-2 2.45v10a5.5 5.5 0 0 0 5.5 5.5h10a2.5 2.5 0 0 0 2.45-2H11.5A4.5 4.5 0 0 1 7 20.5zM15 8a1 1 0 1 0 0 2h5.586l-8.293 8.293a1 1 0 1 0 1.414 1.414L22 11.414V17a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1z");
}
</style><path class="ip52h8dea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:window-new-32-filled"} {...others} />);
}

export default Component;
