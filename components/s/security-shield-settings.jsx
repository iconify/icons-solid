import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rabir5bvf.css';
import '../../css/w/w_8pztb7q.css';
import '../../css/l/l2epsdb2g.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rabir5bvf"/><path class="w_8pztb7q"/><path class="l2epsdb2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:security-shield-settings"} {...others} />);
}

export default Component;
