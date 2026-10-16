import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/krzg40bca.css';
import '../../css/d/d-g435hts.css';
import '../../css/j/ji2eu13ia.css';
import '../../css/q/qjn0-tjei.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="krzg40bca"/><path class="d-g435hts"/><circle transform="rotate(90 16.06 13.42)" class="ji2eu13ia"/><circle transform="matrix(0 1 1 0 17.96 16.97)" class="qjn0-tjei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-controls"} {...others} />);
}

export default Component;
