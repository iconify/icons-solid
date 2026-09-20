import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yjlbdu1jl.css';
import '../../css/f/fs3te152g.css';
import '../../css/o/o4ikk4n8i.css';
import '../../css/n/n78r9lbcf.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="yjlbdu1jl"/><path class="fs3te152g"/><path class="o4ikk4n8i"/><path class="n78r9lbcf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:credit-card-smartphone"} {...others} />);
}

export default Component;
