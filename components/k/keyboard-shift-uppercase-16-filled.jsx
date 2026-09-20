import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.o4tza2vqs {
  fill: currentColor;
  d: path("M6.817 1.571a1.51 1.51 0 0 1 2.367 0l4.598 5.802c.52.657.05 1.621-.789 1.621h-1.978V11c0 .553-.45 1.001-1.005 1.001H5.99A1.003 1.003 0 0 1 4.985 11V8.994H3.007c-.84 0-1.31-.965-.789-1.62zM5.5 13a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z");
}
</style><path class="o4tza2vqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:keyboard-shift-uppercase-16-filled"} {...others} />);
}

export default Component;
