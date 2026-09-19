import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/werlsvbgf.css';
import '../../css/r/rlkfsjbzh.css';
import '../../css/t/tibulpbty.css';
import '../../css/v/vp2v9wbli.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="werlsvbgf"/><path class="rlkfsjbzh"/><path class="tibulpbty"/><path class="vp2v9wbli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:watch-fitness-outline"} {...others} />);
}

export default Component;
