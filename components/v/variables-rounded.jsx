import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zjh1j6bhi {
  fill: currentColor;
  d: path("M3 16V8q0-.425.288-.712T4 7h16q.425 0 .713.288T21 8v8q0 .425-.288.713T20 17H4q-.425 0-.712-.288T3 16");
}
</style><path class="zjh1j6bhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:variables-rounded"} {...others} />);
}

export default Component;
