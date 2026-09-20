import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.bdb1zcczd {
  fill: currentColor;
  d: path("m6.207 6l3.147-3.146a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708zM3 2.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0z");
}
</style><path class="bdb1zcczd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-previous-12-regular"} {...others} />);
}

export default Component;
