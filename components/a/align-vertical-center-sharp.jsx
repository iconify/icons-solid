import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pag7pgb4j {
  fill: currentColor;
  d: path("M7 21v-8H2v-2h5V3h3v8h4V6h3v5h5v2h-5v5h-3v-5h-4v8z");
}
</style><path class="pag7pgb4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:align-vertical-center-sharp"} {...others} />);
}

export default Component;
