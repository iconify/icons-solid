import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n25m17m-z {
  fill: currentColor;
  d: path("M14 20v-2h4v-5.675h2v-.65h-2V6h-4V4h6v5.85h2v4.3h-2V20zM4 20v-5.85H2v-4.3h2V4h6v2H6v5.675H4v.65h2V18h4v2z");
}
</style><path class="n25m17m-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:data-object-outline-sharp"} {...others} />);
}

export default Component;
