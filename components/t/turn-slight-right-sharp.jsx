import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jeg4hwboi {
  fill: currentColor;
  d: path("M9.5 19.77v-7.69L15.6 6h-2.98V5h4.669v4.67h-1V6.688l-5.789 5.77v7.311z");
}
</style><path class="jeg4hwboi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:turn-slight-right-sharp"} {...others} />);
}

export default Component;
