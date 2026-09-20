import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewcqees0g.css';
import '../../css/w/w4rjo2abu.css';
import '../../css/q/ql91_xbuc.css';
import '../../css/f/fxjwthbdd.css';
import '../../css/c/cqdidnb8u.css';

const viewBox = {"width":1552,"height":1563};
const content = `<defs><clipPath id="SVGX7fTHeAS" clipPathUnits="userSpaceOnUse"><path class="ewcqees0g"/></clipPath></defs><g clip-path="url(#SVGX7fTHeAS)"><path class="w4rjo2abu"/><path class="ql91_xbuc"/><path class="fxjwthbdd"/><path class="cqdidnb8u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:dai-ichi-life-holdings"} {...others} />);
}

export default Component;
