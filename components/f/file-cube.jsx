import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j9naxgbvw.css';
import '../../css/s/s2wy1hqyp.css';
import '../../css/s/suj28i7eb.css';
import '../../css/w/wqh43v1wb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j9naxgbvw"/><path class="s2wy1hqyp"/><path class="suj28i7eb"/><path class="wqh43v1wb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-cube"} {...others} />);
}

export default Component;
