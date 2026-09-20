import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r28jo8byz {
  fill: currentColor;
  d: path("M16 11h6V5h-6zM2 19h12V5H2zm6-5.5q-.625 0-1.062-.437T6.5 12t.438-1.062T8 10.5t1.063.438T9.5 12t-.437 1.063T8 13.5m8 5.5h6v-6h-6z");
}
</style><path class="r28jo8byz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bento-sharp"} {...others} />);
}

export default Component;
