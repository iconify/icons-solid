import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pgt4oynkt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.25 7.75l-.5-5m6 5l.5-5m-5.5 5h5.5l-.18.98l-.39 2.04l-.18.98l.45.89l3.85 7.72l.45.89H4.75l.45-.89l3.85-7.72l.45-.89l-.18-.98l-.39-2.04l-.18-.98zM9.5 12h5");
}
</style><path class="pgt4oynkt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:dress-heart-sharp"} {...others} />);
}

export default Component;
