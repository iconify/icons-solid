import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.o3x_cjbtk {
  fill: currentColor;
  d: path("M220 216a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4M80 172a4 4 0 0 0 2.83-1.17L188 65.66V152a4 4 0 0 0 8 0V56a4 4 0 0 0-4-4H96a4 4 0 0 0 0 8h86.34L77.17 165.17A4 4 0 0 0 80 172");
}
</style><path class="o3x_cjbtk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-line-up-right-thin"} {...others} />);
}

export default Component;
