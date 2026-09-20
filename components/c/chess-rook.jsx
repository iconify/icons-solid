import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k1k5hrwjy {
  fill: currentColor;
  d: path("M5 21v-4.192q1.929-1.568 2.848-3.295t1.479-3.84h-.846q-.69 0-1.153-.463t-.462-1.152V3h3.788v2.827h2.712V3h3.788v5.058q0 .69-.463 1.153t-1.152.462h-.872q.58 2.114 1.48 3.84T19 16.809V21z");
}
</style><path class="k1k5hrwjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:chess-rook"} {...others} />);
}

export default Component;
