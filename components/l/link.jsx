import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/i/ih32s4bkl.css';
import '../../css/v/v1kfzlb7a.css';
import '../../css/j/jnye3jbdk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ih32s4bkl wm-k"/><path class="v1kfzlb7a wm-a"/><path class="jnye3jbdk wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:link"} {...others} />);
}

export default Component;
