import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q7j20yrab {
  fill: currentColor;
  d: path("m21 12l-4.95 7H3V5h13.05L21 12Zm-10.475 4l1.25-2.75l2.75-1.25l-2.75-1.25L10.525 8l-1.25 2.75L6.525 12l2.75 1.25l1.25 2.75Z");
}
</style><path class="q7j20yrab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:auto-label-sharp"} {...others} />);
}

export default Component;
