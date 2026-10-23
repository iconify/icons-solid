import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wau85hb9w.css';
import '../../css/k/kgjpp5aah.css';
import '../../css/g/gpxbt74vt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wau85hb9w"/><path class="kgjpp5aah"/><path class="gpxbt74vt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:boxer"} {...others} />);
}

export default Component;
