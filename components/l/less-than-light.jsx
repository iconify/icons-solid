import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.aer_wsb0t {
  fill: currentColor;
  d: path("M205.42 202.57a6 6 0 0 1-8 2.85l-152-72a6 6 0 0 1 0-10.84l152-72a6 6 0 0 1 5.14 10.84L62 128l140.55 66.58a6 6 0 0 1 2.87 7.99");
}
</style><path class="aer_wsb0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:less-than-light"} {...others} />);
}

export default Component;
