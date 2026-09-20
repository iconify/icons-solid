import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t8rg3ebrj {
  fill: currentColor;
  d: path("M4 20v-2h16v2Z");
}
</style><path class="t8rg3ebrj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:chrome-minimize-sharp"} {...others} />);
}

export default Component;
