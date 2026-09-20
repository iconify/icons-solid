import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xy9dc3o-j {
  fill: currentColor;
  d: path("M7.5 9q.625 0 1.063-.437T9 7.5t-.437-1.062T7.5 6t-1.062.438T6 7.5t.438 1.063T7.5 9m0 10q.625 0 1.063-.437T9 17.5t-.437-1.062T7.5 16t-1.062.438T6 17.5t.438 1.063T7.5 19M3 12V3h18v9zm0 10v-9h18v9z");
}
</style><path class="xy9dc3o-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:dns-sharp"} {...others} />);
}

export default Component;
