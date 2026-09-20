import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.ve3-8hown {
  fill: currentColor;
  d: path("M3 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4a2 2 0 1 1 0 4v1.5a.5.5 0 0 1-1 0V14H4v1.5a.5.5 0 0 1-1 0V14a2 2 0 1 1 0-4zm14 7a1 1 0 1 0 0-2H3a1 1 0 1 0 0 2zm-1-7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4h12z");
}
</style><path class="ve3-8hown"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:bench-20-regular"} {...others} />);
}

export default Component;
