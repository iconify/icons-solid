import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.z2f9o-5ai {
  fill: currentColor;
  d: path("M7 3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h1zm1 14h6a3 3 0 0 0 3-3v-1H8zm9-5V6a3 3 0 0 0-3-3H8v9z");
}
</style><path class="z2f9o-5ai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:data-treemap-20-filled"} {...others} />);
}

export default Component;
