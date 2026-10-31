import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/o/ocmpdrh0q.css';
import '../../css/f/f8nlsyfzh.css';
import '../../css/r/rxp23_3og.css';
import '../../css/b/bnw9o7z0h.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/k/klzcy0ogc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ocmpdrh0q"/><path class="f8nlsyfzh wm-shine"/><path class="rxp23_3og wm-k"/><path class="bnw9o7z0h wm-a"/><path class="qr4ochb5c wm-s"/><path class="klzcy0ogc wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:bug-off"} {...others} />);
}

export default Component;
