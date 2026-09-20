import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e-efj7chr {
  fill: currentColor;
  d: path("M4 20V4h15.606l-1 1H5v14h14v-7.361l1-1V20zm7.525-3.712l-4.554-4.553l.708-.708l3.865 3.865l8.79-8.79l.695.683z");
}
</style><path class="e-efj7chr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:select-check-box-sharp"} {...others} />);
}

export default Component;
