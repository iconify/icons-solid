import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cc9yphn4j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.492 17.646h15.016M24 34.48V17.646M40.513 35.49l-14.82 8.556a3.39 3.39 0 0 1-3.387 0L7.486 35.49a3.39 3.39 0 0 1-1.693-2.934V15.444c0-1.21.646-2.329 1.694-2.934l14.82-8.556a3.39 3.39 0 0 1 3.387 0l14.82 8.556a3.39 3.39 0 0 1 1.693 2.934v17.112c0 1.21-.646 2.329-1.694 2.934");
}
</style><path class="cc9yphn4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mlink"} {...others} />);
}

export default Component;
