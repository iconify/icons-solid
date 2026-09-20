import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nvrglhkgb {
  fill: currentColor;
  d: path("M1 20V4h22v16h-5V6H6v14zm2-2h1V6H3zm17 0h1V6h-1zM7.5 22v-7H10l1-1h2l1 1h2.5v7zm5.738-2.262q.512-.513.512-1.238t-.513-1.237T12 16.75t-1.237.513t-.513 1.237t.513 1.238T12 20.25t1.238-.513M3 6h1zm17 0h1z");
}
</style><path class="nvrglhkgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tablet-camera-outline-sharp"} {...others} />);
}

export default Component;
