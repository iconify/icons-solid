import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ifgdf_6fq {
  fill: currentColor;
  d: path("M2.885 18.116V5.885h6.23v1.23h-5v3.77h6v7.23zm1.23-1.231h4.77v-4.77h-4.77zm10 0h5.77v-9.77h-5.77zm-1.23 1.23V5.886h8.23v12.23z");
}
</style><path class="ifgdf_6fq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:60fps-sharp"} {...others} />);
}

export default Component;
