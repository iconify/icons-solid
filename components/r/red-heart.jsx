import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.x_a1g2-sl {
  fill: currentColor;
  d: path("M61.072 17.583C54.678-.04 33.918 7.867 31.998 16.668c-2.641-9.379-22.89-16.376-29.07.928c-6.881 19.273 26.67 36.57 29.07 39.404c2.398-2.252 35.953-20.457 29.074-39.417");
}
</style><path class="x_a1g2-sl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:red-heart"} {...others} />);
}

export default Component;
