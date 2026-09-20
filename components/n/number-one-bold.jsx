import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.p8qhkzbwq {
  fill: currentColor;
  d: path("M148 48v160a12 12 0 0 1-24 0V69.19l-21.83 13.1a12 12 0 0 1-12.34-20.58l40-24A12 12 0 0 1 148 48");
}
</style><path class="p8qhkzbwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:number-one-bold"} {...others} />);
}

export default Component;
