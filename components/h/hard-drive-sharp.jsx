import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.znu28pc8v {
  fill: currentColor;
  d: path("M18.063 15.563q.437-.438.437-1.063t-.437-1.062T17 13t-1.062.438T15.5 14.5t.438 1.063T17 16t1.063-.437M22 9H2l4-4h12zM2 19v-8h20v8z");
}
</style><path class="znu28pc8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:hard-drive-sharp"} {...others} />);
}

export default Component;
