import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.jdymhgg5i {
  fill: currentColor;
  d: path("m239.22 59.44l-45.63 95.82a4 4 0 0 1-.16.34l-34.21 71.84a8 8 0 1 1-14.44-6.88L173.62 160H40a8 8 0 0 1-5.66-13.66L76.69 104L34.34 61.66A8 8 0 0 1 40 48h192a8 8 0 0 1 7.22 11.44");
}
</style><path class="jdymhgg5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:flag-banner-fill"} {...others} />);
}

export default Component;
