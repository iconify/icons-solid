import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.zoobkc44x {
  fill: currentColor;
  d: path("M198 88v104a6 6 0 0 1-6 6H88a6 6 0 0 1 0-12h89.52L59.76 68.24a6 6 0 0 1 8.48-8.48L186 177.52V88a6 6 0 0 1 12 0");
}
</style><path class="zoobkc44x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-down-right-light"} {...others} />);
}

export default Component;
