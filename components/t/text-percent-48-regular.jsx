import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.zqgp0915w {
  fill: currentColor;
  d: path("M35.998 6.214a1.25 1.25 0 0 1 .337 1.735l-22.596 33.5a1.25 1.25 0 1 1-2.073-1.398l22.597-33.5a1.25 1.25 0 0 1 1.735-.337M13.5 8.5a6 6 0 1 0 0 12a6 6 0 0 0 0-12m-8.5 6a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0m23.5 19a6 6 0 1 1 12 0a6 6 0 0 1-12 0m6-8.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17");
}
</style><path class="zqgp0915w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-percent-48-regular"} {...others} />);
}

export default Component;
