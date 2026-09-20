import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gwf8r8bnw {
  fill: currentColor;
  d: path("m15.95 20.464l-2.138-2.114l.713-.708l1.425 1.42l3.525-3.525l.713.688zM7.885 21V4.48h2.423V3h3.384v1.48h2.424v7.712q-.181.039-.352.061q-.172.022-.352.066q-1.893.512-3.114 2.062t-1.221 3.58q0 .818.227 1.583q.227.766.663 1.456z");
}
</style><path class="gwf8r8bnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:battery-status-good-sharp"} {...others} />);
}

export default Component;
