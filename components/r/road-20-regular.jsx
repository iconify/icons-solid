import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.oe0p9ac1o {
  fill: currentColor;
  d: path("M5 2.5a.5.5 0 0 0-1 0v15a.5.5 0 0 0 1 0zm11 0a.5.5 0 0 0-1 0v15a.5.5 0 0 0 1 0zm-5.5 0a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0zm-1 9a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0zm0 3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-1 0z");
}
</style><path class="oe0p9ac1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:road-20-regular"} {...others} />);
}

export default Component;
