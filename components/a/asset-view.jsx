import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lgmhddevn.css';
import '../../css/a/avi7ktl-p.css';
import '../../css/e/e_wydyb-d.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="lgmhddevn"/><path class="avi7ktl-p"/><path class="e_wydyb-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:asset-view"} {...others} />);
}

export default Component;
