import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gr8u2cciq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.75h3.5v16.5h-3.5zm0 4h3.5M2.75 12h3.5m-3.5 4.25h3.5m11.5-12.5h3.5v16.5h-3.5zm0 4h3.5M17.75 12h3.5m-3.5 4.25h3.5m-12-11h5.5v13.5h-5.5zm2.75 0v13.5");
}
</style><path class="gr8u2cciq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:shutters-sharp"} {...others} />);
}

export default Component;
