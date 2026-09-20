import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y_2g1tawm {
  fill: currentColor;
  d: path("M3 21v-5h18v5zm13.5-7V3H21v11zM3 14V3h4.5v11zm6.5 0V3h5v11z");
}
</style><path class="y_2g1tawm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:shelf-position-sharp"} {...others} />);
}

export default Component;
