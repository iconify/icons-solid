import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.klh3bltfq {
  fill: currentColor;
  d: path("M10.25 7A3.25 3.25 0 0 0 7 10.25v5.25a1.5 1.5 0 0 1-3 0v-5.25A6.25 6.25 0 0 1 10.25 4h5.25a1.5 1.5 0 0 1 0 3zm0 34A3.25 3.25 0 0 1 7 37.75V32.5a1.5 1.5 0 0 0-3 0v5.25A6.25 6.25 0 0 0 10.25 44h5.25a1.5 1.5 0 0 0 0-3zM41 10.25A3.25 3.25 0 0 0 37.75 7H32.5a1.5 1.5 0 0 1 0-3h5.25A6.25 6.25 0 0 1 44 10.25v5.25a1.5 1.5 0 0 1-3 0zM37.75 41A3.25 3.25 0 0 0 41 37.75V32.5a1.5 1.5 0 0 1 3 0v5.25A6.25 6.25 0 0 1 37.75 44H32.5a1.5 1.5 0 0 1 0-3zM13 24a1.5 1.5 0 0 1 1.5-1.5h19a1.5 1.5 0 0 1 0 3h-19A1.5 1.5 0 0 1 13 24");
}
</style><path class="klh3bltfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:scan-dash-48-filled"} {...others} />);
}

export default Component;
