import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.gmh1acb-q {
  fill: currentColor;
  d: path("M3.354 3.146a.5.5 0 1 0-.708.708L3.793 5L2.646 6.146a.5.5 0 1 0 .708.708l1.5-1.5a.5.5 0 0 0 0-.708zM7.5 4a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1zm-5 10a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1zM2 9.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5");
}
</style><path class="gmh1acb-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-first-line-20-regular"} {...others} />);
}

export default Component;
