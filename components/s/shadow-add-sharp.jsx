import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l72h9wr4c {
  fill: currentColor;
  d: path("M13.5 13.5v-3h-3v-1h3v-3h1v3h3v1h-3v3zM3 21V7h3.616V3H21v14.385h-4V21zm4.616-4.615H20V4H7.616z");
}
</style><path class="l72h9wr4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:shadow-add-sharp"} {...others} />);
}

export default Component;
