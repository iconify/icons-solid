import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.iv6z5ob1r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37 24a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v15.5h-8.75V19a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v20.5H4.5V28h8.25a2 2 0 0 0 2-2V8.5h9v20a2 2 0 0 0 2 2h1.75a2 2 0 0 0 2-2v-15h9V31a2 2 0 0 0 2 2h3v6.5H37z");
}
</style><path class="iv6z5ob1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mora"} {...others} />);
}

export default Component;
