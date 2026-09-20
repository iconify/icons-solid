import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.wttd5nuyn {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-20.69 155.31a8 8 0 0 1-11.31 0L68.69 80A8 8 0 0 1 80 68.69L187.31 176a8 8 0 0 1 0 11.31");
}
</style><path class="wttd5nuyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:placeholder-fill"} {...others} />);
}

export default Component;
