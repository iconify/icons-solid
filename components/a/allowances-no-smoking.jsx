import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yl6qyqbtf.css';
import '../../css/w/wcn0p-kxr.css';
import '../../css/y/ytg3nrqhy.css';
import '../../css/c/c6ortbcgz.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="yl6qyqbtf"/><path class="wcn0p-kxr"/><path class="ytg3nrqhy"/><path class="c6ortbcgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:allowances-no-smoking"} {...others} />);
}

export default Component;
