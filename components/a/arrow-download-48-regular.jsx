import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.kntbfwb5i {
  fill: currentColor;
  d: path("M25.25 6.25a1.25 1.25 0 1 0-2.5 0v26.482l-8.366-8.366a1.25 1.25 0 0 0-1.768 1.768l10.5 10.5a1.25 1.25 0 0 0 1.768 0l10.5-10.5a1.25 1.25 0 0 0-1.768-1.768l-8.366 8.366zm-14 34.25a1.25 1.25 0 1 0 0 2.5h25.5a1.25 1.25 0 1 0 0-2.5z");
}
</style><path class="kntbfwb5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-download-48-regular"} {...others} />);
}

export default Component;
