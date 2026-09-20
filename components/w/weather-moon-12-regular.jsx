import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.h092cjptc {
  fill: currentColor;
  d: path("M6.035 1A5 5 0 1 1 1.52 8.222a.5.5 0 0 1 .453-.723l.021.001h.007a4 4 0 0 0 3.584-5.777a.5.5 0 0 1 .45-.723m.76 1.08a5 5 0 0 1-3.969 6.352A4 4 0 1 0 6.795 2.08");
}
</style><path class="h092cjptc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:weather-moon-12-regular"} {...others} />);
}

export default Component;
