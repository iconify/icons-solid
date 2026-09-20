import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cjedobbob {
  fill: currentColor;
  d: path("M9 21v-6H3V3h12v6h6v12zm1-1h10V10h-6V4H4v10h6zm2-8");
}
</style><path class="cjedobbob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:stack-group-outline-sharp"} {...others} />);
}

export default Component;
