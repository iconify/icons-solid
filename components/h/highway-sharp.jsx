import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bn-wcdbnc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 2.75h6l.3.95l5.15 16.6l.3.95H2.75l.3-.95L8.2 3.7l.3-.95zm1 2.75l-.25 2m-.25 3L9.75 13m-.25 3l-.25 3M13.5 5.5l.25 2m.25 3l.25 2.5m.25 3l.25 3");
}
</style><path class="bn-wcdbnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:highway-sharp"} {...others} />);
}

export default Component;
