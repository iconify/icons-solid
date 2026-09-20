import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.aydw77bgh {
  fill: currentColor;
  d: path("M6 12a6 6 0 0 1 6-6h24a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6H12a6 6 0 0 1-6-6zm28 3.25a1.25 1.25 0 1 0-2.5 0v17.5a1.25 1.25 0 1 0 2.5 0zM24 24c-.69 0-1.25.56-1.25 1.25v7.5a1.25 1.25 0 1 0 2.5 0v-7.5c0-.69-.56-1.25-1.25-1.25m-7.5-3.75a1.25 1.25 0 1 0-2.5 0v12.5a1.25 1.25 0 1 0 2.5 0z");
}
</style><path class="aydw77bgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:data-usage-48-filled"} {...others} />);
}

export default Component;
