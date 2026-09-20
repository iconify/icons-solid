import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vlyhtbbyo.css';
import '../../css/w/wyerq1-7y.css';
import '../../css/x/xffcndilr.css';
import '../../css/u/ur14wvsfk.css';
import '../../css/r/rvux61dlp.css';
import '../../css/o/omsnwu1iq.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="vlyhtbbyo"/><path class="wyerq1-7y"/><path class="xffcndilr"/><path class="ur14wvsfk"/><path class="rvux61dlp"/><path class="omsnwu1iq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:newspaper-read-man"} {...others} />);
}

export default Component;
