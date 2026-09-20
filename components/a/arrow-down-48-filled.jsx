import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j3j8cm8vw {
  fill: currentColor;
  d: path("M25.5 5.25a1.5 1.5 0 0 0-3 0v31.835L10.32 24.698a1.5 1.5 0 1 0-2.14 2.104l14.75 15l.031.03c.27.259.636.418 1.039.418a1.5 1.5 0 0 0 1.07-.448l14.75-15a1.5 1.5 0 1 0-2.14-2.104L25.5 37.085z");
}
</style><path class="j3j8cm8vw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-down-48-filled"} {...others} />);
}

export default Component;
