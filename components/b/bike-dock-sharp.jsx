import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tuzj1fbuv {
  fill: currentColor;
  d: path("M4 20v-1l4.77-.917L9.807 4h4.384l1.039 14.083L20 19v1zm6.808-1.827h2.384V5h-2.384z");
}
</style><path class="tuzj1fbuv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:bike-dock-sharp"} {...others} />);
}

export default Component;
