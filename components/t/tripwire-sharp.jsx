import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b-ow15r2m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 7.5v12.25M19.25 7.5v12.25m-14.5-7h6l1.25-1.5l1.25 1.5h6M12 5.5v2.75m-3.25-2l1 1.5m5.5-1.5l-1 1.5");
}
</style><path class="b-ow15r2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:tripwire-sharp"} {...others} />);
}

export default Component;
