import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f64q9cbsx {
  fill: currentColor;
  d: path("M5.096 19q-.69 0-1.153-.462t-.462-1.153V6.615q0-.69.462-1.152T5.096 5h10.77q.69 0 1.152.463t.463 1.153v4.653l2.342-2.342q.192-.192.444-.096t.252.369v5.6q0 .273-.252.37q-.252.095-.444-.097l-2.342-2.342v4.654q0 .69-.463 1.153T15.866 19z");
}
</style><path class="f64q9cbsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:videocam-rounded"} {...others} />);
}

export default Component;
