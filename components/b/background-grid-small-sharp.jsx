import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.np36fhowe {
  fill: currentColor;
  d: path("M3 21h3v-3H3zm5 0h3v-3H8zm5 0h3v-3h-3zm5 0h3v-3h-3zM3 6h3V3H3zm0 5h3V8H3zm0 5h3v-3H3zM8 6h3V3H8zm0 5h3V8H8zm0 5h3v-3H8zm5-10h3V3h-3zm0 5h3V8h-3zm0 5h3v-3h-3zm5-10h3V3h-3zm0 5h3V8h-3zm0 5h3v-3h-3z");
}
</style><path class="np36fhowe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:background-grid-small-sharp"} {...others} />);
}

export default Component;
