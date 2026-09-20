import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mbmwctb9y {
  fill: currentColor;
  d: path("M9 20h6v-2H9zm-4 3V1h14v5.1h1v4.8h-1V23z");
}
</style><path class="mbmwctb9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mobile-3-sharp"} {...others} />);
}

export default Component;
