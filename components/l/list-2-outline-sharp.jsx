import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c2drsmbzt {
  fill: currentColor;
  d: path("M7.75 17v-1h8.5v1zM4 12.5v-1h16v1zM7.75 8V7h8.5v1z");
}
</style><path class="c2drsmbzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:list-2-outline-sharp"} {...others} />);
}

export default Component;
