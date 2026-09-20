import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.izqyy-bkv {
  fill: currentColor;
  d: path("M4 22V2h16v20zm4-5h8V7H8zm6-8v4h-4V9zm-2 11.25q.325 0 .538-.225t.212-.525q0-.325-.213-.537T12 18.75q-.3 0-.525.213t-.225.537q0 .3.225.525t.525.225m0-15q.325 0 .538-.225t.212-.525q0-.325-.213-.537T12 3.75q-.3 0-.525.213t-.225.537q0 .3.225.525T12 5.25");
}
</style><path class="izqyy-bkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:switch-off-sharp"} {...others} />);
}

export default Component;
