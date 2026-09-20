import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u1thnnb6j {
  fill: currentColor;
  d: path("M7 14.494v-1H4.5v-1h5v-3h-5v-5H7v-1h1v1h2.5v1h-5v3h5v5H8v1zm6.95 5.808l-3.558-3.558l.708-.707l2.85 2.85l5.689-5.689l.707.708z");
}
</style><path class="u1thnnb6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:price-check-outline-sharp"} {...others} />);
}

export default Component;
