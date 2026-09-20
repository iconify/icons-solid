import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bx5pwg-0k {
  fill: currentColor;
  d: path("M5.48 16.496q0-.843.591-1.425l9-9q.582-.59 1.425-.59t1.433.59t.59 1.433t-.59 1.425l-9 9q-.582.59-1.425.59t-1.433-.59t-.59-1.433");
}
</style><path class="bx5pwg-0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:pen-size-4-outline-rounded"} {...others} />);
}

export default Component;
