import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d80-vhbqh {
  fill: currentColor;
  d: path("M11.667 21.671L3 13.004L12.992 3h8.693v8.692zm6.46-14.113q.425 0 .722-.292t.297-.708q0-.425-.295-.722t-.716-.297t-.715.295t-.293.716t.292.715t.708.293");
}
</style><path class="d80-vhbqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:shoppingmode-sharp"} {...others} />);
}

export default Component;
