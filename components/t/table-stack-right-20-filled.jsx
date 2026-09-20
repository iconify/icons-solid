import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.y-d-pibhe {
  fill: currentColor;
  d: path("M17 3.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0zM3 15v-2h4v4H5a2 2 0 0 1-2-2m5 2v-4h4v3.5a.5.5 0 0 1-.5.5zm0-5h4V8H8zM3 8v4h4V8zm9-1H8V3h3.5a.5.5 0 0 1 .5.5zM3 7V5a2 2 0 0 1 2-2h2v4z");
}
</style><path class="y-d-pibhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:table-stack-right-20-filled"} {...others} />);
}

export default Component;
