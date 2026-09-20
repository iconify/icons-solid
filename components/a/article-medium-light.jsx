import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ed8bvfbun {
  fill: currentColor;
  d: path("M54 136a6 6 0 0 1-6 6H24a6 6 0 0 1 0-12h10V62H24a6 6 0 0 1 0-12h16a6 6 0 0 1 5.09 2.8L80 108.68l34.91-55.86A6 6 0 0 1 120 50h16a6 6 0 0 1 0 12h-10v68h10a6 6 0 0 1 0 12h-24a6 6 0 0 1 0-12h2V76.92l-28.91 46.26a6 6 0 0 1-10.18 0L46 76.92V130h2a6 6 0 0 1 6 6m114-26h64a6 6 0 0 0 0-12h-64a6 6 0 0 0 0 12m64 20h-64a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m0 32H80a6 6 0 0 0 0 12h152a6 6 0 0 0 0-12m0 32H80a6 6 0 0 0 0 12h152a6 6 0 0 0 0-12");
}
</style><path class="ed8bvfbun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:article-medium-light"} {...others} />);
}

export default Component;
