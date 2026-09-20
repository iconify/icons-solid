import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.hdpm07bfg {
  fill: currentColor;
  d: path("M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-56 160a8 8 0 0 1-16 0V84.94l-20.42 10.22a8 8 0 1 1-7.16-14.32l32-16A8 8 0 0 1 144 72Z");
}
</style><path class="hdpm07bfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:number-one-fill"} {...others} />);
}

export default Component;
