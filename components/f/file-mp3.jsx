import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m8byvuc8v.css';
import '../../css/n/nwuwst0yc.css';
import '../../css/v/vv5q_krbt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m8byvuc8v"/><path class="nwuwst0yc"/><path class="vv5q_krbt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-mp3"} {...others} />);
}

export default Component;
