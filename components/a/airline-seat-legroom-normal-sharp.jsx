import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x4vrpkbut {
  fill: currentColor;
  d: path("M16 21v-7H6V3h6v6h7v9h3v3zm-2-4H3V3h2v12h9z");
}
</style><path class="x4vrpkbut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:airline-seat-legroom-normal-sharp"} {...others} />);
}

export default Component;
