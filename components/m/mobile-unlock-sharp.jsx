import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zt9wb2bio {
  fill: currentColor;
  d: path("M8.5 16h6v-5H13v-1q0-.425.288-.712T14 9t.713.288T15 10v1h1v-1q0-.825-.587-1.412T14 8t-1.412.588T12 10v1H8.5zM5 23V1h14v5.1h1v4.8h-1V23z");
}
</style><path class="zt9wb2bio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mobile-unlock-sharp"} {...others} />);
}

export default Component;
