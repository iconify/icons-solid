import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rbz_gwbjy {
  fill: currentColor;
  d: path("M3.5 21.5v-1H7V16h4.5v-4.5H16V7h4.5V3.5h1V8H17v4.5h-4.5V17H8v4.5z");
}
</style><path class="rbz_gwbjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:floor-outline-sharp"} {...others} />);
}

export default Component;
