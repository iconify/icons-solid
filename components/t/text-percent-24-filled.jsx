import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lbt2rhb4m {
  fill: currentColor;
  d: path("M17.956 3.171a1 1 0 0 1 .27 1.388l-10.793 16a1 1 0 1 1-1.658-1.118l10.792-16a1 1 0 0 1 1.389-.27M6.5 5a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0m13 10a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8");
}
</style><path class="lbt2rhb4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-percent-24-filled"} {...others} />);
}

export default Component;
