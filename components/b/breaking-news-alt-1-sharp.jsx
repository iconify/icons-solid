import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.km2rc11vh {
  fill: currentColor;
  d: path("M6 17h5v-2H6zm10 0h2v-2h-2zM6 13h5v-2H6zm10 0h2V7h-2zM6 9h5V7H6zM2 21V3h20v18z");
}
</style><path class="km2rc11vh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:breaking-news-alt-1-sharp"} {...others} />);
}

export default Component;
