import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z3-tvrbfs {
  fill: currentColor;
  d: path("m2 20l6-8l-6-8h14l6 8l-6 8zm4-2h9l4.5-6L15 6H6l4.5 6zm6.75-6");
}
</style><path class="z3-tvrbfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:label-important-outline-sharp"} {...others} />);
}

export default Component;
