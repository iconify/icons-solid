import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xnvcx7b1r {
  fill: currentColor;
  d: path("M7.5 16h12V6h-12zm-1 1V3h14v14zm-3 3V6.616h1V19h12.385v1zm4-4V4z");
}
</style><path class="xnvcx7b1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:ad-group-outline-sharp"} {...others} />);
}

export default Component;
