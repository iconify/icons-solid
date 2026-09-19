import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.iva5j5d0z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.407 33.217H7.211a2.71 2.71 0 0 1-2.678-3.128L6.92 14.783H43.5l-2.533 16.243a2.59 2.59 0 0 1-2.56 2.19M14.418 18.197h19.164m-14.996 3.521h10.828");
}
</style><path class="iva5j5d0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:cent-m-passbook"} {...others} />);
}

export default Component;
