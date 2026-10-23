import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m8byvuc8v.css';
import '../../css/x/xs20cf5gb.css';
import '../../css/n/n0je19b0h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m8byvuc8v"/><path class="xs20cf5gb"/><path class="n0je19b0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-psd"} {...others} />);
}

export default Component;
