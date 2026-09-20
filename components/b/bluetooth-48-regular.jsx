import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.b3qk577yt {
  fill: currentColor;
  d: path("M23.242 4.108c.45-.2.977-.117 1.344.213l10 9a1.25 1.25 0 0 1 .037 1.824L25.54 24l9.082 8.855a1.25 1.25 0 0 1-.037 1.824l-10 9a1.25 1.25 0 0 1-2.086-.929V26.965l-7.877 7.68a1.25 1.25 0 0 1-1.746-1.79L21.96 24l-9.082-8.855a1.25 1.25 0 0 1 1.746-1.79l7.877 7.68V5.25c0-.494.29-.941.741-1.142M25 26.965v12.978l6.922-6.23zm0-5.93l6.922-6.748L25 8.057z");
}
</style><path class="b3qk577yt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:bluetooth-48-regular"} {...others} />);
}

export default Component;
