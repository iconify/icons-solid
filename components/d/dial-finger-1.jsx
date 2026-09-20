import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yxzy8rq4r.css';
import '../../css/s/so7q2yzpm.css';
import '../../css/a/a5yhrqmya.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yxzy8rq4r"/><path class="so7q2yzpm"/><path class="a5yhrqmya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:dial-finger-1"} {...others} />);
}

export default Component;
