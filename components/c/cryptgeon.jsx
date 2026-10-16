import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5fxqhb3o.css';
import '../../css/g/gxg1dgbun.css';
import '../../css/b/b-cvpdvks.css';
import '../../css/z/zxpr4fbbd.css';
import '../../css/v/vanfgdc7n.css';
import '../../css/q/q84kpc70r.css';
import '../../css/a/a6u7a5blw.css';
import '../../css/i/ihxxrabsz.css';
import '../../css/o/ok8g09baw.css';

const viewBox = {"width":450,"height":200};
const content = `<clipPath id="SVGNSmZTd2A"><path class="a5fxqhb3o"/></clipPath><g class="gxg1dgbun"><g clip-path="url(#SVGNSmZTd2A)"><path class="b-cvpdvks"/><path class="zxpr4fbbd"/></g><path class="vanfgdc7n"/><path class="q84kpc70r"/><path class="a6u7a5blw"/><path class="ihxxrabsz"/><path class="ok8g09baw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:cryptgeon"} {...others} />);
}

export default Component;
