import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.e7h3qsb7y {
  fill: currentColor;
  d: path("M208 80h-72V48a8 8 0 0 0-16 0v32H48a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h72v32a8 8 0 0 0 16 0v-32h72a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16m0 80H48V96h160z");
}
</style><path class="e7h3qsb7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:align-center-horizontal-simple"} {...others} />);
}

export default Component;
