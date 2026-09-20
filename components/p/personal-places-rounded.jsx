import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uqquaabfk {
  fill: currentColor;
  d: path("M7 19V6.039q0-.441.299-.74T8.039 5h7.103q.404 0 .762.187q.358.186.575.51l1.644 2.384q.293.429.293.919t-.293.92l-1.644 2.384q-.217.323-.575.51q-.358.186-.762.186H8v6q0 .214-.143.357T7.5 19.5t-.357-.143T7 19");
}
</style><path class="uqquaabfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:personal-places-rounded"} {...others} />);
}

export default Component;
