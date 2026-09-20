import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.reixkd6wc {
  fill: currentColor;
  d: path("m12 21l-5-9.02L12 3l5 8.98zm0-2.034l3.848-6.985L12 5.035L8.152 11.98zM12 12");
}
</style><path class="reixkd6wc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:hov-outline-sharp"} {...others} />);
}

export default Component;
