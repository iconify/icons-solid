import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dnaugbolp {
  fill: currentColor;
  d: path("M3 15.327V4.616q0-.672.472-1.144T4.616 3h12.653v1H4.616q-.27 0-.443.173T4 4.616v10.711zM11.52 21v-2H8.384q-.69 0-1.153-.462t-.463-1.153v-9q0-.69.463-1.153t1.153-.463h12.019q.69 0 1.153.463t.462 1.153v9q0 .69-.462 1.153T20.404 19H17.25v2z");
}
</style><path class="dnaugbolp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:tv-displays"} {...others} />);
}

export default Component;
