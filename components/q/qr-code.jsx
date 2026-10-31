import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/c/cuszwubiq.css';
import '../../css/w/wf6p9ebkw.css';
import '../../css/k/kcag22w9s.css';
import '../../css/v/vimxy0xre.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="cuszwubiq"/><path class="wf6p9ebkw"/><path class="kcag22w9s wm-k"/><path class="vimxy0xre wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:qr-code"} {...others} />);
}

export default Component;
