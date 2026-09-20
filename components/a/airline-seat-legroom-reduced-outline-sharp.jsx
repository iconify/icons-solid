import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.py6bq6b5d {
  fill: currentColor;
  d: path("M14 21v-3l1-4H6V3h6v6h6.25l.95 1.275L17 18h3v3zm-2-4H3V3h2v12h7z");
}
</style><path class="py6bq6b5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:airline-seat-legroom-reduced-outline-sharp"} {...others} />);
}

export default Component;
