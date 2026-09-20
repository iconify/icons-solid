import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bkicrc9ty {
  fill: currentColor;
  d: path("m14 22l-6-3.5v-7l3.5-2.05v6.05h5V9.45L20 11.5v7zM5.5 11L2 9V5l3.5-2L9 5v4zm7.5 3V2h9l-2 3l2 3h-7v6z");
}
</style><path class="bkicrc9ty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:strategy-sharp"} {...others} />);
}

export default Component;
