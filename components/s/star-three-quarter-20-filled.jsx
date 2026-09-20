import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.acj3vedku {
  fill: currentColor;
  d: path("m12 5.133l-1.102-2.234a1 1 0 0 0-1.794 0l-1.93 3.912l-4.317.627a1 1 0 0 0-.554 1.706l3.124 3.044l-.738 4.3a1 1 0 0 0 1.451 1.054l3.861-2.03L12 16.562z");
}
</style><path class="acj3vedku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:star-three-quarter-20-filled"} {...others} />);
}

export default Component;
