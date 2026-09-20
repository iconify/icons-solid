import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kklm6bb6k {
  fill: currentColor;
  d: path("M13.5 19.77v-7.312l-5.788-5.77V9.67h-1V5h4.669v1H8.4l6.1 6.08v7.69z");
}
</style><path class="kklm6bb6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:turn-slight-left-outline-sharp"} {...others} />);
}

export default Component;
