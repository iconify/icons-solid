import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/c/ct-at5qym.css';
import '../../css/g/g8rox2xrl.css';
import '../../css/u/ug6-_6dpg.css';
import '../../css/t/t2zlwccha.css';
import '../../css/o/oimgqhb4o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ct-at5qym"/><path class="g8rox2xrl wm-shine"/><path class="ug6-_6dpg wm-k"/><path class="t2zlwccha wm-a"/><path class="oimgqhb4o wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:coffin"} {...others} />);
}

export default Component;
