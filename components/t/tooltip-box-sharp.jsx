import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bl-gm25ty {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3.25h16.25v9.5H14.4l-1.6 2.3l-.8 1.249l-.8-1.249l-1.6-2.3H2.75v-9.5zM7.25 8h9.5M9 18h6v2.5H9z");
}
</style><path class="bl-gm25ty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:tooltip-box-sharp"} {...others} />);
}

export default Component;
