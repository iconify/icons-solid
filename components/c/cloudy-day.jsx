import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iqd9eybny.css';
import '../../css/o/olhl1pbiz.css';
import '../../css/k/kabl_cbkk.css';
import '../../css/w/w8scbbyql.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="iqd9eybny"/><path class="olhl1pbiz"/><path class="kabl_cbkk"/><path class="w8scbbyql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:cloudy-day"} {...others} />);
}

export default Component;
