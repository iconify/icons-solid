import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.il2cqckfq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21c4-5 15-5 19 0ZM9 6a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-2 8.5c0-1.75 2.25-2.75 5-2.75s5 1 5 2.75");
}
</style><path class="il2cqckfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bullpen"} {...others} />);
}

export default Component;
