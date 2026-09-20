import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cq2-7bw6z {
  fill: currentColor;
  d: path("M3 19v-2.077h2.077V19zm4.846 0v-2.077H21V19zM3 13.038v-2.077h2.077v2.077zm4.846 0v-2.077H21v2.078zM3 7.077V5h2.077v2.077zm4.846 0V5H21v2.077z");
}
</style><path class="cq2-7bw6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:lists-outline-sharp"} {...others} />);
}

export default Component;
