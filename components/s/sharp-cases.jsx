import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xv609gbag {
  fill: currentColor;
  d: path("M18 5V1h-8v4H5v13h18V5zm-2 0h-4V3h4zM3 9H1v13h18v-2H3z");
}
</style><path class="xv609gbag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-cases"} {...others} />);
}

export default Component;
