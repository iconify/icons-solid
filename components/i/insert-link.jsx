import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v2c-rvo8d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 4.5H7.25a4.5 4.5 0 0 0 0 9H9m2-9h1.75a4.5 4.5 0 0 1 0 9H11M8.5 9h3m6.5 6v6.25m-3.125-3.125h6.25");
}
</style><path class="v2c-rvo8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:insert-link"} {...others} />);
}

export default Component;
