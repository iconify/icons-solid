import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/a/ayqjo3syz.css';
import '../../css/f/fcx8ddb_h.css';
import '../../css/x/xsnyx0v1k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ayqjo3syz"/><path class="fcx8ddb_h wm-k"/><path class="wm-a xsnyx0v1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:bee"} {...others} />);
}

export default Component;
