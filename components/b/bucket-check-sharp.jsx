import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xjv71obmc {
  fill: currentColor;
  d: path("M5.75 20L4 7.385h2.77V4h10.46v3.385H20L18.23 20zm5.239-3.923l4.065-4.027l-.713-.688l-3.333 3.294l-1.348-1.329l-.714.714zm-3.22-8.693h8.462V5H7.769z");
}
</style><path class="xjv71obmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:bucket-check-sharp"} {...others} />);
}

export default Component;
