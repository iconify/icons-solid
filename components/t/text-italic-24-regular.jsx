import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kktk8-76i {
  fill: currentColor;
  d: path("M18.75 4a.75.75 0 0 1 0 1.5h-3.482l-4.932 13h3.414a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5h3.482l4.932-13H10.25a.75.75 0 0 1 0-1.5z");
}
</style><path class="kktk8-76i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-italic-24-regular"} {...others} />);
}

export default Component;
