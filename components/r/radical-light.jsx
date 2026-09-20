import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.nb6db_pvd {
  fill: currentColor;
  d: path("M246 80v24a6 6 0 0 1-12 0V86H132.16L85.62 210.11a6 6 0 0 1-11.24 0l-48-128a6 6 0 1 1 11.24-4.22L80 190.91l42.38-113A6 6 0 0 1 128 74h112a6 6 0 0 1 6 6");
}
</style><path class="nb6db_pvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:radical-light"} {...others} />);
}

export default Component;
