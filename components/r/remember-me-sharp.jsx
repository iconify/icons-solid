import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lz-cnnbml {
  fill: currentColor;
  d: path("M5 23V1h14v22zm7-9q1.35 0 2.613.313T17 15.2V6H7v9.2q1.125-.575 2.388-.887T12 14m-2.125-1.875Q9 11.25 9 10t.875-2.125T12 7t2.125.875T15 10t-.875 2.125T12 13t-2.125-.875");
}
</style><path class="lz-cnnbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:remember-me-sharp"} {...others} />);
}

export default Component;
