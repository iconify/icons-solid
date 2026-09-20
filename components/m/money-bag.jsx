import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p_5ng-b8w.css';
import '../../css/f/ftupkp7et.css';
import '../../css/d/d1xqf7bcz.css';
import '../../css/q/qozfjmbpa.css';
import '../../css/f/fk5ssccly.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="p_5ng-b8w"/><path class="ftupkp7et"/><path class="d1xqf7bcz"/><path class="qozfjmbpa"/><path class="fk5ssccly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:money-bag"} {...others} />);
}

export default Component;
