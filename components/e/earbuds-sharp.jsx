import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.esnlwohmh {
  fill: currentColor;
  d: path("M4.463 19.538Q3 18.075 3 16V6.2q0-1.35.825-2.275T6 3h3v6H5v7q0 1.25.875 2.125T8 19t2.125-.875T11 16V8q0-2.075 1.463-3.537T16 3t3.538 1.463T21 8v10q0 1.275-.962 2.138T17.8 21H15v-6h4V8q0-1.25-.875-2.125T16 5t-2.125.875T13 8v8q0 2.075-1.463 3.538T8 21t-3.537-1.463");
}
</style><path class="esnlwohmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:earbuds-sharp"} {...others} />);
}

export default Component;
