import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/t/ta5z0mbxa.css';
import '../../css/c/ccmmwkm9a.css';
import '../../css/y/ys8br6uhx.css';
import '../../css/s/sdi9acbkd.css';
import '../../css/z/zu7t2wbxf.css';
import '../../css/d/d-fmcsbka.css';
import '../../css/j/jp53mqkpa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ta5z0mbxa"/><path class="ccmmwkm9a"/><path class="wm-shine ys8br6uhx"/><path class="sdi9acbkd wm-k"/><path class="wm-a zu7t2wbxf"/><path class="d-fmcsbka"/><path class="jp53mqkpa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:users"} {...others} />);
}

export default Component;
