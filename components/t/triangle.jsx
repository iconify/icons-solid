import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wqczv5byo {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m14.919 7.533l4.44 7.647q.979 1.688.006 3.379q-.974 1.691-2.925 1.691H7.56q-1.951 0-2.925-1.691t.006-3.379l4.44-7.647q.976-1.68 2.919-1.68t2.919 1.68");
}
</style><path class="wqczv5byo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:triangle"} {...others} />);
}

export default Component;
