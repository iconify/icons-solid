import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.d_ivijr8m {
  fill: currentColor;
  d: path("M104 36H64a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4Zm84-172h-40a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4Z");
}
</style><path class="d_ivijr8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:columns-thin"} {...others} />);
}

export default Component;
