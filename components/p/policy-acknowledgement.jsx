import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w80zrlu0l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4H13M2.5 7.5h9m-9 3.5H8m9.657-7.485l2.828 2.828L12 14.828l-3.536.708L9.172 12ZM2.5 19c1-2.5 2.5-2.5 3-.5S7 20.5 8 18");
}
</style><path class="w80zrlu0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:policy-acknowledgement"} {...others} />);
}

export default Component;
