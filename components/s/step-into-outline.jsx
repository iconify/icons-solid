import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iw1srk9ug {
  fill: currentColor;
  d: path("M9.875 21.125Q9 20.25 9 19t.875-2.125T12 16t2.125.875T15 19t-.875 2.125T12 22t-2.125-.875M12 14L7 9l1.4-1.4l2.6 2.575V2h2v8.175L15.575 7.6L17 9z");
}
</style><path class="iw1srk9ug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:step-into-outline"} {...others} />);
}

export default Component;
