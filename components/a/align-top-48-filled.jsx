import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.xx794-_zg {
  fill: currentColor;
  d: path("M5.25 6.5a1.25 1.25 0 1 0 0 2.5h37.5a1.25 1.25 0 1 0 0-2.5zM26 15.75a4.25 4.25 0 0 1 4.25-4.25h5.5A4.25 4.25 0 0 1 40 15.75v15A4.25 4.25 0 0 1 35.75 35h-5.5A4.25 4.25 0 0 1 26 30.75zM12.25 11.5h5.5A4.25 4.25 0 0 1 22 15.75V38a4.25 4.25 0 0 1-4.25 4.25h-5.5A4.25 4.25 0 0 1 8 38V15.75a4.25 4.25 0 0 1 4.25-4.25");
}
</style><path class="xx794-_zg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:align-top-48-filled"} {...others} />);
}

export default Component;
