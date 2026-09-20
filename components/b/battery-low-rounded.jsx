import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m-owtcbkp {
  fill: currentColor;
  d: path("M5 17q-.425 0-.712-.288T4 16v-2H3q-.425 0-.712-.288T2 13v-2q0-.425.288-.712T3 10h1V8q0-.425.288-.712T5 7h16q.425 0 .713.288T22 8v8q0 .425-.288.713T21 17zm1-2h11V9H6z");
}
</style><path class="m-owtcbkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:battery-low-rounded"} {...others} />);
}

export default Component;
