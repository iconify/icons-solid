import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ihm5qgbgf.css';
import '../../css/g/gjr-zv8hz.css';
import '../../css/y/y5qkmsbci.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ihm5qgbgf"/><path class="gjr-zv8hz"/><path class="y5qkmsbci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-symlink"} {...others} />);
}

export default Component;
