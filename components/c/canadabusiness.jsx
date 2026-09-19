import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.wxmggqo8p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 6.247v22.167l-6.479-6.478l-1.588-10.163l3.72 2.096zm0 0v22.167l6.479-6.478l1.588-10.163l-3.72 2.096zM12.948 19.903l10.16 10.037l-9.207 11.813l.762-3.874L4.5 30.066l2.604-1.207l-1.524-6.923h5.843zm22.104 0l-21.151 21.85h20.198l-.762-3.874L43.5 30.066l-2.604-1.207l1.524-6.923h-5.843z");
}
</style><path class="wxmggqo8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:canadabusiness"} {...others} />);
}

export default Component;
