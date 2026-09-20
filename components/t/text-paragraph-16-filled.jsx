import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.o4qsiepoc {
  fill: currentColor;
  d: path("M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m10 10a.5.5 0 0 1-1 0V11a2.998 2.998 0 1 1 0-6h3.5a.5.5 0 0 1 0 1H14v7.5a.5.5 0 0 1-1 0V6h-1zM2.5 6h5.035q-.27.466-.409 1H2.5a.5.5 0 0 1 0-1m5.035 4a4 4 0 0 1-.409-1H2.5a.5.5 0 0 0 0 1z");
}
</style><path class="o4qsiepoc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-paragraph-16-filled"} {...others} />);
}

export default Component;
