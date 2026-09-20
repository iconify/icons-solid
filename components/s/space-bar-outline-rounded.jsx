import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.civhz-b9e {
  fill: currentColor;
  d: path("M6 15q-.825 0-1.412-.587T4 13v-3q0-.425.288-.712T5 9t.713.288T6 10v3h12v-3q0-.425.288-.712T19 9t.713.288T20 10v3q0 .825-.587 1.413T18 15z");
}
</style><path class="civhz-b9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:space-bar-outline-rounded"} {...others} />);
}

export default Component;
