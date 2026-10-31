import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/rhmwxgbpg.css';
import '../../css/e/edf_seb3y.css';
import '../../css/m/mjqmuz-2n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="rhmwxgbpg wm-shadow"/><path class="edf_seb3y wm-shadow"/><path class="mjqmuz-2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:underline"} {...others} />);
}

export default Component;
