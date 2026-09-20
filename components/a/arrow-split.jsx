import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q0v5jabpp {
  fill: currentColor;
  d: path("M4 13v-2h7.6l5-5H14V4h6v6h-2V7.4L12.4 13zm10 7v-2h2.6l-3.2-3.15l1.45-1.45L18 16.6V14h2v6z");
}
</style><path class="q0v5jabpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:arrow-split"} {...others} />);
}

export default Component;
