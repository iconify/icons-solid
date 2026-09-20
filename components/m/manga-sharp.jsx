import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qgbcscary {
  fill: currentColor;
  d: path("M2 20V4h20v16zm6.1-2H20V7.025L17 8l-3.075-1L12 9.625l-3.075 1v3.25l-1.9 2.625z");
}
</style><path class="qgbcscary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:manga-sharp"} {...others} />);
}

export default Component;
