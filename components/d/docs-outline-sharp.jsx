import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zjptzqr8a {
  fill: currentColor;
  d: path("m14 2l5 5v15H5V2zm-3 2H7v16h10V10h-6zm2 0v4h4v-.175L13.175 4zM9 19v-2h4v2zm0-4v-2h6v2z");
}
</style><path class="zjptzqr8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:docs-outline-sharp"} {...others} />);
}

export default Component;
