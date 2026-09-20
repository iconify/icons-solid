import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.aj78q4bzw {
  fill: currentColor;
  d: path("M27.854 4.854a.5.5 0 0 0-.708-.708L16 15.293L4.854 4.146a.5.5 0 1 0-.708.708L15.293 16L4.146 27.146a.5.5 0 0 0 .708.708L16 16.707l11.146 11.147a.5.5 0 0 0 .708-.708L16.707 16z");
}
</style><path class="aj78q4bzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:dismiss-32-light"} {...others} />);
}

export default Component;
