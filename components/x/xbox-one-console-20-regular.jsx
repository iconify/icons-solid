import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.mlcyzob2t {
  fill: currentColor;
  d: path("M17 6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM5 13h12v-1H5zm-2-2h14V7H3zm12.25-3a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5");
}
</style><path class="mlcyzob2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:xbox-one-console-20-regular"} {...others} />);
}

export default Component;
