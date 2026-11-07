import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rsd2d9bea.css';
import '../../css/y/yvm5pb94k.css';
import '../../css/b/bd2_93bmd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rsd2d9bea"/><path class="yvm5pb94k"/><path class="bd2_93bmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:printer-minimalistic-bold"} {...others} />);
}

export default Component;
