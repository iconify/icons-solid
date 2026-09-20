import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ml-la-68f {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-80 160H80a8 8 0 0 1 0-16h48a48 48 0 0 0 0-96H80a8 8 0 0 1 0-16h48a64 64 0 0 1 0 128");
}
</style><path class="ml-la-68f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:superset-proper-of-fill"} {...others} />);
}

export default Component;
