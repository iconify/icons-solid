import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gu1ovcb9x.css';
import '../../css/z/znfc33clb.css';
import '../../css/q/qqc-xhfwz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gu1ovcb9x"/><path class="znfc33clb"/><path class="qqc-xhfwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:upload-track-2-bold-duotone"} {...others} />);
}

export default Component;
