import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bdcn6t91n {
  fill: currentColor;
  d: path("M7 17v-3H3V7h2v5h2V7h2v5h2v2H9v3zm5 0V7h9v2h-7v6h5v-2h-2.5v-2H21v6z");
}
</style><path class="bdcn6t91n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:4g-mobiledata-outline-sharp"} {...others} />);
}

export default Component;
