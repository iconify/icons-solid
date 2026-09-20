import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.g8qx9cajp {
  fill: currentColor;
  d: path("m7 2.116l-.282-.57a.8.8 0 0 0-1.435 0L4.172 3.798l-2.486.361a.8.8 0 0 0-.444 1.365l1.8 1.753l-.425 2.476a.8.8 0 0 0 1.16.844l2.224-1.17l.999.526z");
}
</style><path class="g8qx9cajp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:star-three-quarter-12-filled"} {...others} />);
}

export default Component;
