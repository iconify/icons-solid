import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.y88zu0agq {
  fill: currentColor;
  d: path("m173.75 49.72l-48 160a6 6 0 1 1-11.5-3.45L159.94 54H88a6 6 0 0 1 0-12h80a6 6 0 0 1 5.75 7.72");
}
</style><path class="y88zu0agq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:number-seven-light"} {...others} />);
}

export default Component;
