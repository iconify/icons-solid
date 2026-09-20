import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ln9k5cckw {
  fill: currentColor;
  d: path("M5 21V3h14v18zm1-1h12V4H6zm9.498-7q.416 0 .709-.291t.293-.707t-.291-.709t-.707-.293t-.709.291t-.293.707t.291.709t.707.293M5 20h1V4H5z");
}
</style><path class="ln9k5cckw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:sensor-door-outline-sharp"} {...others} />);
}

export default Component;
