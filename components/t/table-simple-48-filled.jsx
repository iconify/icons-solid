import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.m7qlxg70a {
  fill: currentColor;
  d: path("M6 10.75A4.75 4.75 0 0 1 10.75 6h12v16.75H6zm0 14.5v12A4.75 4.75 0 0 0 10.75 42h12V25.25zM25.25 42h12A4.75 4.75 0 0 0 42 37.25v-12H25.25zM42 22.75v-12A4.75 4.75 0 0 0 37.25 6h-12v16.75z");
}
</style><path class="m7qlxg70a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:table-simple-48-filled"} {...others} />);
}

export default Component;
