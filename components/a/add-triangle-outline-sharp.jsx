import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.meja6hbnv {
  fill: currentColor;
  d: path("M1 20L12 1l11 19zm3.475-2h15.05L12 5zM11 16.5h2v-2h2v-2h-2v-2h-2v2H9v2h2zm1-3");
}
</style><path class="meja6hbnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:add-triangle-outline-sharp"} {...others} />);
}

export default Component;
