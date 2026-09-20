import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u1q_qv3ps {
  fill: currentColor;
  d: path("M11 13V9h2v2h2v2zm7 0v-2h2V9h2v4zm-7-7V2h4v2h-2v2zm9 0V4h-2V2h4v4zM3.4 22L2 20.6L7.6 15H3v-2h8v8H9v-4.6z");
}
</style><path class="u1q_qv3ps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:jump-to-element-outline-sharp"} {...others} />);
}

export default Component;
