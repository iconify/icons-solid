import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi25mkbtf.css';
import '../../css/m/mpywkgvrr.css';
import '../../css/z/zi6a9qsdc.css';
import '../../css/o/o5eicpnmn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bi25mkbtf"/><path class="mpywkgvrr"/><path class="zi6a9qsdc"/><path class="o5eicpnmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:satellite-bold-duotone"} {...others} />);
}

export default Component;
