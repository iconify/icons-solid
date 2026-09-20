import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b7xop0bee {
  fill: currentColor;
  d: path("m6 20l-4-4l1.4-1.4L5 16.15V5h2v11.15l1.6-1.55L10 16zm6-1v-2h10v2zm0-6v-2h10v2zm0-6V5h10v2z");
}
</style><path class="b7xop0bee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:list-arrow-outline-sharp"} {...others} />);
}

export default Component;
