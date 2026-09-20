import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.undfsxbov {
  fill: currentColor;
  d: path("M4 12h16V8H4zm15 10v-3h-3v-2h3v-3h2v3h3v2h-3v3zM2 20V4h20v8h-3q-2.075 0-3.537 1.463T14 17v3z");
}
</style><path class="undfsxbov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:add-card-sharp"} {...others} />);
}

export default Component;
