import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r3m-8ij2x {
  fill: currentColor;
  d: path("M2 20.23V19h20v1.23zM19 17V4h.885v13zM4.73 17l5.29-13h.96l5.29 13h-1.21l-1.442-3.62H7.335L5.862 17zm2.978-4.6h5.527l-2.743-6.8h-.023z");
}
</style><path class="r3m-8ij2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:text-fields-alt-outline-sharp"} {...others} />);
}

export default Component;
