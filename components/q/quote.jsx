import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/l/lmdbi8btb.css';
import '../../css/m/mkdi7hb8i.css';
import '../../css/n/nbiavb01t.css';
import '../../css/v/v96mv4btx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="lmdbi8btb"/><path class="mkdi7hb8i wm-shine"/><path class="nbiavb01t"/><path class="v96mv4btx wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:quote"} {...others} />);
}

export default Component;
