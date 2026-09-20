import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.ab8yl7xtk {
  fill: currentColor;
  d: path("M22 24a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2zM13.293 2.293a1 1 0 0 1 1.414 0l6.5 6.5a1 1 0 1 1-1.414 1.414L15 5.414V21a1 1 0 1 1-2 0V5.414l-4.793 4.793a1 1 0 1 1-1.414-1.414z");
}
</style><path class="ab8yl7xtk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-export-up-28-filled"} {...others} />);
}

export default Component;
