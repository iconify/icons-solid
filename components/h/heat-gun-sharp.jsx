import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kw0hxbuoy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 5H2.75v6h2l.13 1.49l.49 5.52l.13 1.49h4l-.13-1.49l-.49-5.52L8.75 11H11V5zM11 6.25h3v3.5h-3zm6.5-1.5l-1.125 1.125L17.5 7l1.125 1.125L17.5 9.25l-1.125 1.125L17.5 11.5m3-6.75l-1.125 1.125L20.5 7l1.125 1.125L20.5 9.25l-1.125 1.125L20.5 11.5");
}
</style><path class="kw0hxbuoy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:heat-gun-sharp"} {...others} />);
}

export default Component;
