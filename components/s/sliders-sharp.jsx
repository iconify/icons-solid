import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yit-lcg9h {
  fill: currentColor;
  d: path("M2 15V9h20v6zm12-2h6v-2h-6z");
}
</style><path class="yit-lcg9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:sliders-sharp"} {...others} />);
}

export default Component;
