import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/d/dly27ulfv.css';
import '../../css/x/xa2hfrbrx.css';
import '../../css/w/wbjyenbnm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="dly27ulfv"/><path class="wm-k xa2hfrbrx"/><path class="wbjyenbnm wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:rangoli-pattern"} {...others} />);
}

export default Component;
