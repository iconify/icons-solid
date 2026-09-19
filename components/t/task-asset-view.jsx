import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_wfxg79v.css';
import '../../css/s/sezprjuom.css';
import '../../css/g/gz7pb0bjk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="f_wfxg79v"/><path class="sezprjuom"/><path class="gz7pb0bjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:task-asset-view"} {...others} />);
}

export default Component;
