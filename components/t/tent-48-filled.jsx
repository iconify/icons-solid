import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.u6fpnoh1b {
  fill: currentColor;
  d: path("M25.002 6.02a1.25 1.25 0 0 0-1.92 0c-2.992 3.59-8.895 7.85-12.29 9.746a1.25 1.25 0 0 0-.628.92L7.434 36.5H5.25a1.25 1.25 0 0 0 0 2.5h37.5a1.25 1.25 0 1 0 0-2.5h-2.1l-2.73-19.813a1.25 1.25 0 0 0-.63-.92c-3.394-1.897-9.297-6.158-12.288-9.747M17.787 36.5c2.097-3.048 4.261-6.965 6.213-13.152c1.764 5.581 3.732 9.44 6.213 13.152z");
}
</style><path class="u6fpnoh1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:tent-48-filled"} {...others} />);
}

export default Component;
