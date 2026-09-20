import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yw2qgsdsm {
  fill: currentColor;
  d: path("m8.162 19.273l-4.347.912l.912-4.346zm.76-.648l-3.547-3.546l11.5-11.481l3.527 3.527z");
}
</style><path class="yw2qgsdsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:stylus-sharp"} {...others} />);
}

export default Component;
