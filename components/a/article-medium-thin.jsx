import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.u5m2oepod {
  fill: currentColor;
  d: path("M52 136a4 4 0 0 1-4 4H24a4 4 0 0 1 0-8h12V60H24a4 4 0 0 1 0-8h16a4 4 0 0 1 3.39 1.87L80 112.45l36.61-58.57A4 4 0 0 1 120 52h16a4 4 0 0 1 0 8h-12v72h12a4 4 0 0 1 0 8h-24a4 4 0 0 1 0-8h4V70l-32.61 52.12a4 4 0 0 1-6.78 0L44 70v62h4a4 4 0 0 1 4 4m116-28h64a4 4 0 0 0 0-8h-64a4 4 0 0 0 0 8m64 24h-64a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m0 32H80a4 4 0 0 0 0 8h152a4 4 0 0 0 0-8m0 32H80a4 4 0 0 0 0 8h152a4 4 0 0 0 0-8");
}
</style><path class="u5m2oepod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:article-medium-thin"} {...others} />);
}

export default Component;
