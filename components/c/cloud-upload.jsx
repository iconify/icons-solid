import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wai46z6_f.css';
import '../../css/g/gr1lzhqrl.css';
import '../../css/s/s04bt2b7y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wai46z6_f"/><path class="gr1lzhqrl"/><path class="s04bt2b7y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cloud-upload"} {...others} />);
}

export default Component;
