import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.fwrsd1u3x {
  fill: currentColor;
  d: path("M5 4a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6.05a2.5 2.5 0 0 1 2.223-1.99A3 3 0 1 1 18 10.34V7a3 3 0 0 0-3-3zm12.5 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 4.5c0 1.245-1 2.5-3.5 2.5S12 17.75 12 16.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5");
}
</style><path class="fwrsd1u3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:share-screen-person-20-filled"} {...others} />);
}

export default Component;
