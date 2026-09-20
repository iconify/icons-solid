import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.pn8rombzz {
  fill: currentColor;
  d: path("M200 28a12 12 0 0 0-12 12v62L74.55 31A20 20 0 0 0 44 47.88v160.24A20 20 0 0 0 74.55 225L188 154v62a12 12 0 0 0 24 0V40a12 12 0 0 0-12-12M68 200.73V55.27L184.3 128Z");
}
</style><path class="pn8rombzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:skip-forward-bold"} {...others} />);
}

export default Component;
