import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.n-2bnugxq {
  fill: currentColor;
  d: path("M2 5.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m0 9a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m1.354-6.354a.5.5 0 1 0-.708.708L3.793 10l-1.147 1.146a.5.5 0 0 0 .708.708l1.5-1.5a.5.5 0 0 0 0-.708zM7.5 8h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1 0-1m0 3a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1z");
}
</style><path class="n-2bnugxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-continuous-20-regular"} {...others} />);
}

export default Component;
