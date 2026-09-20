import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hlha389cu {
  fill: currentColor;
  d: path("M4 19v-4.712h1.923V19zm4.673-5.577V9.635h1.943v3.788zm4.693-4.654V5h1.942v3.77zM18.058 19V5H20v14z");
}
</style><path class="hlha389cu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:waterfall-chart"} {...others} />);
}

export default Component;
