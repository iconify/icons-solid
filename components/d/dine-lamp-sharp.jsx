import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uib214brz {
  fill: currentColor;
  d: path("M3 21v-3h-.975L1 7h2l.725 8H10v3H9v3H7.5v-3h-3v3zm8 0v-8H5v-2h14v2h-6v8zm4 0v-3h-1v-3h6.3l.725-8H23l-1 11h-1v3h-1.5v-3h-3v3zM7 9V8q0-1.65 1.175-2.825T11 4V1h2v3q1.65 0 2.825 1.175T17 8v1z");
}
</style><path class="uib214brz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:dine-lamp-sharp"} {...others} />);
}

export default Component;
