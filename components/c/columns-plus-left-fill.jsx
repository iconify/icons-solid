import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ly9z8l-5c {
  fill: currentColor;
  d: path("M144 48v160a16 16 0 0 1-16 16h-24a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h24a16 16 0 0 1 16 16m56-16h-24a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M64 120H48v-16a8 8 0 0 0-16 0v16H16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0v-16h16a8 8 0 0 0 0-16");
}
</style><path class="ly9z8l-5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:columns-plus-left-fill"} {...others} />);
}

export default Component;
