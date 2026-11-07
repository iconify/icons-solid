import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rsd2d9bea.css';
import '../../css/b/bd2_93bmd.css';
import '../../css/k/k7eozybwj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rsd2d9bea"/><path class="bd2_93bmd"/><path class="k7eozybwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:printer-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
