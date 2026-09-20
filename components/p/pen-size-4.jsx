import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lrfkm2b7v {
  fill: currentColor;
  d: path("M5 16.5q0-1.05.725-1.775l9-9Q15.45 5 16.5 5t1.775.725T19 7.5t-.725 1.775l-9 9Q8.55 19 7.5 19t-1.775-.725T5 16.5");
}
</style><path class="lrfkm2b7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:pen-size-4"} {...others} />);
}

export default Component;
