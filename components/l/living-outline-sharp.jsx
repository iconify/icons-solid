import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m71t1hbat {
  fill: currentColor;
  d: path("M2 22V2h20v20zm2-2h16V4H4zm1-2h14v-7.65h-1.25V6H6.25v4.35H5zm1.5-1.5v-5h2v3h7v-3h2v5zM10 13v-2.95H7.75V7.5h8.5v2.55H14V13zm-6 7V4z");
}
</style><path class="m71t1hbat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:living-outline-sharp"} {...others} />);
}

export default Component;
