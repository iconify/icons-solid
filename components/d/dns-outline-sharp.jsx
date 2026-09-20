import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.odhqc3eat {
  fill: currentColor;
  d: path("M7.5 6q-.625 0-1.062.438T6 7.5t.438 1.063T7.5 9t1.063-.437T9 7.5t-.437-1.062T7.5 6m0 10q-.625 0-1.062.438T6 17.5t.438 1.063T7.5 19t1.063-.437T9 17.5t-.437-1.062T7.5 16M3 12V3h18v9zm2-7v5h14V5zM3 22v-9h18v9zm2-7v5h14v-5zM5 5v5zm0 10v5z");
}
</style><path class="odhqc3eat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:dns-outline-sharp"} {...others} />);
}

export default Component;
