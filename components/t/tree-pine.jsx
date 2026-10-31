import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/uyr_nvbxr.css';
import '../../css/r/rlafu7tfd.css';
import '../../css/q/qiwyx_bry.css';
import '../../css/x/xdrv52mgw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="uyr_nvbxr wm-shadow"/><path class="rlafu7tfd wm-shadow"/><path class="qiwyx_bry"/><path class="xdrv52mgw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:tree-pine"} {...others} />);
}

export default Component;
