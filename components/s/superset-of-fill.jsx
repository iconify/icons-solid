import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.p4v675b8q {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-32 152H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16m-32-32H80a8 8 0 0 1 0-16h64a24 24 0 0 0 0-48H80a8 8 0 0 1 0-16h64a40 40 0 0 1 0 80");
}
</style><path class="p4v675b8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:superset-of-fill"} {...others} />);
}

export default Component;
