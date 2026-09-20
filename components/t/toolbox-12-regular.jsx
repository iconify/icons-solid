import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.z1-ujnbhq {
  fill: currentColor;
  d: path("M1 5.5A1.5 1.5 0 0 1 2.5 4H3v-.5A1.5 1.5 0 0 1 4.5 2h3A1.5 1.5 0 0 1 9 3.5V4h.5A1.5 1.5 0 0 1 11 5.5v4A1.5 1.5 0 0 1 9.5 11h-7A1.5 1.5 0 0 1 1 9.5zM9.5 5h-7a.5.5 0 0 0-.5.5V7h2v-.5a.5.5 0 0 1 1 0V7h2v-.5a.5.5 0 0 1 1 0V7h2V5.5a.5.5 0 0 0-.5-.5M7 8H5v.5a.5.5 0 0 1-1 0V8H2v1.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V8H8v.5a.5.5 0 0 1-1 0zM4 3.5V4h4v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5");
}
</style><path class="z1-ujnbhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:toolbox-12-regular"} {...others} />);
}

export default Component;
