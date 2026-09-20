import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lr50cz-on {
  fill: currentColor;
  d: path("M8 21v-2H2V3h20v7h-9.2l1.85-1.85l-1.4-1.4L9 11l4.25 4.25l1.4-1.4L12.8 12H22v7h-6v2z");
}
</style><path class="lr50cz-on"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:reset-tv-sharp"} {...others} />);
}

export default Component;
