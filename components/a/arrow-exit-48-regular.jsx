import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.xq7s9yblz {
  fill: currentColor;
  d: path("M12.25 6A6.25 6.25 0 0 0 6 12.25v23.5A6.25 6.25 0 0 0 12.25 42h18.5a1.25 1.25 0 1 0 0-2.5h-18.5a3.75 3.75 0 0 1-3.75-3.75v-23.5a3.75 3.75 0 0 1 3.75-3.75h18.5a1.25 1.25 0 1 0 0-2.5zm22.634 8.366a1.25 1.25 0 0 0-1.768 1.768l6.616 6.616H17.25a1.25 1.25 0 1 0 0 2.5h22.482l-6.616 6.616a1.25 1.25 0 0 0 1.768 1.768l8.75-8.75a1.25 1.25 0 0 0 0-1.768z");
}
</style><path class="xq7s9yblz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-exit-48-regular"} {...others} />);
}

export default Component;
