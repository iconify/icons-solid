import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t4n6001um {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12.75S7 10 7 6.5a2.6 2.6 0 0 1 5-1.1a2.6 2.6 0 0 1 5 1.1c0 3.5-5 6.25-5 6.25ZM2.75 15h2.5l3.25 1.5h5V19H9m3.25 0l5.5-2.4a1.4 1.4 0 0 1 1.6 2.25l-5.6 2.4h-11");
}
</style><path class="t4n6001um"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:self-care-sharp"} {...others} />);
}

export default Component;
