import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.wxqs_e-zq {
  fill: currentColor;
  d: path("M14.5 2v2a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V2zm-4 2.5l.52.476l-2.398 4.75a.5.5 0 1 1-.893-.451l2.17-4.3zM9 13c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5");
}
</style><path class="wxqs_e-zq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:inking-tool-accent-16-filled"} {...others} />);
}

export default Component;
