import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n3_7imb4o {
  fill: currentColor;
  d: path("M15 16h4v-4h-1.5v2.5H15zm-3-1q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15m-7-3h1.5V9.5H9V8H5zm-3 7V5h20v14z");
}
</style><path class="n3_7imb4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:universal-currency-alt-sharp"} {...others} />);
}

export default Component;
