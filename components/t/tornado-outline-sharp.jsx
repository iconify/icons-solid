import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mitvq_bxp {
  fill: currentColor;
  d: path("M2.73 4h18.54L12 20zm1.745 1l2.033 3.5h10.984L19.525 5zm2.612 4.5l2.302 4h5.223l2.301-4zm2.88 5L12 18l2.033-3.5z");
}
</style><path class="mitvq_bxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:tornado-outline-sharp"} {...others} />);
}

export default Component;
